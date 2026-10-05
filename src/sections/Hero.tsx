import SearchBar from '../components/SearchBar'
import { ArrowRightIcon } from '../components/icons'
import { Link } from 'react-router-dom'
import { useScrollVideo } from '../hooks/useScrollVideo'

export default function Hero() {
  const { containerRef, videoLayerRef, contentRef, overlayRef, videoRef } = useScrollVideo()

  return (
    <section ref={containerRef} className="hero-scroll-container">
      <div className="hero-sticky">
        {/* Video layer — full-bleed cinematic background */}
        <div
          ref={videoLayerRef}
          className="hero-video-layer"
          aria-label="Cinematic fly-through of a luxury modern home interior."
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
          >
            <source src="/hero-3d.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient overlay for text contrast */}
        <div ref={overlayRef} className="hero-overlay" aria-hidden="true" />

        {/* Hero content */}
        <div ref={contentRef} className="hero-content">
          {/* Text content — centered vertically */}
          <div className="container-premium flex-1 flex flex-col items-center justify-center text-center pt-16 lg:pt-20">
            <p className="eyebrow text-white/80 mb-5">PREMIUM PROPERTIES. BETTER LIVING.</p>
            <h1 className="text-hero font-bold text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
              Find Your<br />
              Dream Home{' '}
              <span className="font-script text-champagne-light text-5xl lg:text-6xl">with Everlight</span>
            </h1>
            <p className="text-lg text-white/90 mt-6 max-w-md leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)]">
              Discover modern homes, prime locations, and lifestyle-driven communities — all in one place.
            </p>
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              <Link to="/properties" className="btn-primary">
                Browse Properties <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* Search bar — pinned to bottom of hero */}
          <div className="container-premium pb-8 lg:pb-12">
            <div className="max-w-4xl mx-auto relative">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
