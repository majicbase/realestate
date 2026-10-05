import { useEffect, useRef } from 'react'

/**
 * Scroll-driven cinematic video hero hook.
 *
 * Uses a single rAF-throttled scroll listener that writes GPU-friendly
 * transforms directly to DOM refs — no React state, no re-renders.
 *
 * The outer section should be taller than the viewport (e.g. 200vh).
 * The inner sticky container stays pinned while the user scrolls through
 * the extra height, and scroll progress (0→1) drives the video transform.
 */
export function useScrollVideo() {
  const containerRef = useRef<HTMLElement>(null)
  const videoLayerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const videoLayer = videoLayerRef.current
    const content = contentRef.current
    const overlay = overlayRef.current
    const video = videoRef.current
    if (!container || !videoLayer || !content) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches

    // Best-effort autoplay (muted + playsInline makes this reliable)
    if (video) {
      video.play().catch(() => {})
    }

    let ticking = false

    const update = () => {
      ticking = false

      const rect = container.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      const progress =
        scrollable > 0
          ? Math.min(1, Math.max(0, -rect.top / scrollable))
          : 1

      const eased = easeOutCubic(progress)

      if (reducedMotion) {
        // Simple fade only — no transforms, no filters
        videoLayer.style.opacity = String(1 - progress)
        videoLayer.style.transform = 'none'
        videoLayer.style.filter = 'none'
        content.style.opacity = '1'
        content.style.transform = 'none'
        if (overlay) overlay.style.opacity = String(1 - progress)
      } else if (isMobile) {
        // Simplified: opacity + very subtle scale, no blur
        videoLayer.style.opacity = (1 - eased).toFixed(3)
        videoLayer.style.transform = `scale(${(1.02 - 0.04 * eased).toFixed(4)})`
        videoLayer.style.filter = 'none'
        content.style.opacity = (progress < 0.6 ? 1 : Math.max(0, 1 - (progress - 0.6) * 2.5)).toFixed(3)
        content.style.transform = 'none'
        if (overlay) overlay.style.opacity = (1 - eased).toFixed(3)
      } else {
        // Full cinematic experience
        const vOpacity = 1 - eased
        const vScale = 1.05 - 0.1 * eased // 1.05 → 0.95
        const vTranslateY = -8 * eased // 0 → -8%
        const vBlur = 6 * eased // 0 → 6px
        const vBrightness = 1 - 0.3 * eased // 1 → 0.7

        videoLayer.style.opacity = vOpacity.toFixed(3)
        videoLayer.style.transform = `scale(${vScale.toFixed(4)}) translateY(${vTranslateY.toFixed(2)}%)`
        videoLayer.style.filter = `blur(${vBlur.toFixed(2)}px) brightness(${vBrightness.toFixed(3)})`

        // Content: full opacity until 50%, then lifts and fades
        const cOpacity = progress < 0.5 ? 1 : Math.max(0, 1 - (progress - 0.5) * 2)
        const cTranslateY = -40 * eased
        content.style.opacity = cOpacity.toFixed(3)
        content.style.transform = `translateY(${cTranslateY.toFixed(2)}px)`

        if (overlay) overlay.style.opacity = (1 - eased).toFixed(3)
      }

      // Performance: hide + pause when the hero is fully scrolled through
      if (progress >= 0.98) {
        videoLayer.style.display = 'none'
        if (video && !video.paused) video.pause()
      } else {
        videoLayer.style.display = ''
        if (video && video.paused) video.play().catch(() => {})
      }
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { containerRef, videoLayerRef, contentRef, overlayRef, videoRef }
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}
