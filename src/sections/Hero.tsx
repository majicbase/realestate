import { useEffect, useRef } from 'react'
import SearchBar from '../components/SearchBar'
import { ArrowRightIcon } from '../components/icons'
import { Link } from 'react-router-dom'

/**
 * Cinematic scroll-driven Hero.
 *
 * A tall scroll container (210–250vh) houses a sticky 100vh panel.  As the user
 * scrolls, a single rAF callback computes a 0→1 progress value and applies
 * GPU-friendly transforms (opacity / translate3d / scale / filter) directly to
 * DOM refs — no React re-renders on scroll.
 *
 * Progress mapping (smoothstep-eased):
 *   0%   → video full, content visible, max immersion
 *   50%  → video ~50% opacity, content drifting forward
 *   75%  → video almost gone, content dominant
 * 100%  → video gone, cream gradient hands off to next section
 */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoLayerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const videoLayer = videoLayerRef.current
    const overlay = overlayRef.current
    const content = contentRef.current
    const gradient = gradientRef.current
    const video = videoRef.current

    if (!container || !videoLayer || !overlay || !content) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    // Pause / resume video based on visibility (perf)
    if (video) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {})
            } else {
              video.pause()
            }
          })
        },
        { threshold: 0.05 },
      )
      io.observe(video)
    }

    // Reduced-motion: skip scroll-driven transforms, let the page scroll normally
    if (reducedMotion) return

    let rafId: number | undefined

    const update = () => {
      rafId = undefined
      const rect = container.getBoundingClientRect()
      const scrollRange = container.offsetHeight - window.innerHeight
      if (scrollRange <= 0) return

      const raw = Math.min(Math.max(-rect.top / scrollRange, 0), 1)
      // smoothstep — organic, cinematic easing
      const p = raw * raw * (3 - 2 * raw)

      // Video layer — fade, scale down, drift, blur, dim
      videoLayer.style.opacity = String(1 - p)
      videoLayer.style.transform = `translate3d(0, ${p * (isMobile ? 20 : 40)}px, 0) scale(${1 - p * 0.08})`
      videoLayer.style.filter = `blur(${isMobile ? 0 : p * 5}px) brightness(${1 - p * 0.4})`

      // Contrast overlay — relaxes but never fully vanishes
      overlay.style.opacity = String(1 - p * 0.5)

      // Content — drifts up, subtle scale-up, stays readable
      content.style.transform = `translate3d(0, ${-p * (isMobile ? 15 : 30)}px, 0) scale(${1 + p * 0.02})`

      // Bottom gradient — fades in during the last 35% for a seamless handoff
      if (gradient) {
        gradient.style.opacity = String(Math.max(0, (p - 0.65) / 0.35))
      }
    }

    const onScroll = () => {
      if (rafId === undefined) {
        rafId = requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId !== undefined) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-[210vh] lg:h-[250vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-navy">
        {/* ── Video layer ─────────────────────────────────────────── */}
        <div
          ref={videoLayerRef}
          className="absolute inset-0"
          style={{ willChange: 'transform, opacity, filter' }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{ pointerEvents: 'none', objectPosition: 'center' }}
          >
            <source src="/hero-3d.mp4" type="video/mp4" />
          </video>
        </div>

        {/* ── Cinematic overlay (contrast + vignette) ─────────────── */}
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(14,27,42,0.55) 0%, rgba(14,27,42,0.25) 35%, rgba(14,27,42,0.35) 65%, rgba(14,27,42,0.65) 100%)',
          }}
        />

        {/* ── Hero content ───────────────────────────────────────── */}
        <div
          ref={contentRef}
          className="relative h-full flex flex-col items-center justify-center text-center px-4"
          style={{ willChange: 'transform' }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow mb-5 text-champagne-light">PREMIUM PROPERTIES. BETTER LIVING.</p>
            <h1
              className="text-hero font-bold text-white"
              style={{ textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}
            >
              Find Your
              <br />
              Dream Home{' '}
              <span className="font-script text-champagne-light text-5xl lg:text-6xl">
                with Everlight
              </span>
            </h1>
            <p
              className="text-lg text-cream-100/90 mt-6 max-w-md mx-auto leading-relaxed"
              style={{ textShadow: '0 1px 12px rgba(0,0,0,0.3)' }}
            >
              Discover modern homes, prime locations, and lifestyle-driven communities — all in one
              place.
            </p>
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              <Link to="/properties" className="btn-accent">
                Browse Properties <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-white/10"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* Search bar */}
          <div className="w-full max-w-4xl mt-10 lg:mt-12 relative mx-auto">
            <SearchBar />
          </div>
        </div>

        {/* ── Bottom gradient → seamless handoff to next section ──── */}
        <div
          ref={gradientRef}
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, #F9F6F1)',
            opacity: 0,
          }}
        />
      </div>
    </div>
  )
}
