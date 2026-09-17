import { FaArrowRight } from "react-icons/fa6"
import { LuActivity } from "react-icons/lu"
import { Link } from "react-router"

const CinePlus = () => {
  return (
    <div className="w-full max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Card */}
        <div
          className="lg:col-span-7 xl:col-span-8 relative rounded-2xl md:rounded-3xl overflow-hidden border border-slate-800/80 bg-cover bg-center p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[400px] sm:min-h-[440px] shadow-xl"
          style={{
            backgroundImage: "url('/Assets/Cineplus.png')",
          }}
        >
          {/* Dark gradient*/}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/35 z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-0 pointer-events-none" />

          {/* Top Badge */}
          <div className="relative z-10">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-black/60 border border-slate-700/60 backdrop-blur-md text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 shadow-sm">
              CURATED REEL OF THE WEEK
            </span>
          </div>

          {/* Content  */}
          <div className="relative z-10 mt-auto pt-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-3">
              The Auteur Retrospective: Golden Age of Sci-Fi
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal mb-6">
              Hand-picked by world-renowned filmmakers, immerse yourself in 14 seminal movies that transformed narrative world-building forever.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="btn btn-sm sm:btn-md rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold border-none px-6 shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.6)] transition-all duration-200 flex items-center gap-2 text-xs sm:text-sm">
                <span>Explore Collection</span>
                <FaArrowRight className="text-xs" />
              </button>
              <span className="text-xs sm:text-sm font-semibold text-slate-300">
                14 Films • 32 Awards
              </span>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="lg:col-span-5 xl:col-span-4 bg-[#10141e]/90 border border-slate-800/80 rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[400px] sm:min-h-[440px] shadow-xl">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                COMMUNITY CONSENSUS
              </span>
              <LuActivity className="text-lg text-slate-300" />
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-3 mb-2">
              Top Rated Cinema Pulse
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Real-time aggregate scores across over 1.4 million audience and festival ballots.
            </p>
          </div>

          {/* Rating Progress Bars */}
          <div className="space-y-4 my-6">
            {/* 9.0 - 10.0 */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-200">9.0 - 10.0 (Masterpieces)</span>
                <span className="text-amber-400/95 font-bold">1,842 Titles</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="w-[85%] h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" />
              </div>
            </div>

            {/* 8.0 - 8.9  */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-200">8.0 - 8.9 (Critically Acclaimed)</span>
                <span className="text-slate-300">8,420 Titles</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="w-[65%] h-full bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full" />
              </div>
            </div>

            {/* 7.0 - 7.9  */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-200">7.0 - 7.9 (Crowd Favorites)</span>
                <span className="text-slate-300">18,310 Titles</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="w-[45%] h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
            <span className="text-slate-400 font-medium">Updated 14 mins ago</span>
            <Link
              to="/rankings"
              className="font-bold text-amber-500 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
            >
              Rankings &gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CinePlus

