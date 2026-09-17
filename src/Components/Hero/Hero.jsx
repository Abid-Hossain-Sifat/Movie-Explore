import { FaFire, FaPlay } from "react-icons/fa6"
import { IoVideocam } from "react-icons/io5"

const Hero = () => {
  return (
    <div className="w-full max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Hero Banner */}
      <div
        className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-slate-800/80 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/Assets/Hero.png')",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle top fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-[1] pointer-events-none" />

        {/* Left-to-right dark fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 md:via-black/70 to-transparent z-[1] pointer-events-none" />

        {/* Subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-44 sm:h-52 bg-gradient-to-t from-black via-black/85 to-transparent z-[1] pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-16 lg:py-24 max-w-2xl flex flex-col justify-center min-h-[480px] sm:min-h-[540px] lg:min-h-[580px]">
          {/* Badge / Tooltip */}
          <div className="mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-slate-700/60 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-slate-300 shadow-sm">
              <FaFire className="text-amber-500 text-xs shrink-0" />
              <span>NOW PREMIERING ONLINE</span>
              <span className="text-slate-500 font-bold">•</span>
              <span className="text-slate-400 normal-case font-medium">Winter 2025 Spotlight</span>
            </div>
          </div>

          {/* Heading and Description */}
          <div className="space-y-4 mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Discover{" "}
              <span className="text-amber-500 drop-shadow-[0_2px_15px_rgba(245,158,11,0.4)]">
                Movies
              </span>
            </h1>
            <p className="text-slate-300/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
              Explore thousands of blockbuster films, critically acclaimed cinema, and hidden gems all in one place. Experience theater-fidelity playback and curated cinema reels.
            </p>
          </div>

          {/* Action Buttons & Indicator */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            {/* Explore Now Button (DaisyUI btn with glowing amber shadow) */}
            <button className="btn btn-sm sm:btn-md rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold border-none px-6 shadow-[0_4px_25px_rgba(245,158,11,0.5)] hover:shadow-[0_4px_30px_rgba(245,158,11,0.7)] transition-all duration-200 flex items-center gap-2 text-sm sm:text-base">
              <FaPlay className="text-xs fill-current" />
              Explore Now
            </button>

            {/* Watch Reel Button (DaisyUI btn) */}
            <button className="btn btn-sm sm:btn-md rounded-full bg-[#1b2230]/90 hover:bg-[#252e42] text-slate-100 border border-slate-700/60 font-semibold px-5 backdrop-blur-sm transition-all duration-200 flex items-center gap-2 text-sm sm:text-base">
              <IoVideocam className="text-base text-slate-300" />
              Watch Reel
            </button>

            {/* Watching Now Indicator */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 sm:ml-2">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
              1,240 Watching Now
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

