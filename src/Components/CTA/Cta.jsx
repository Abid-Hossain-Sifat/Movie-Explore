import { MdOutlineImageSearch } from "react-icons/md"

const Cta = () => {
  return (
    <div className="w-full max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <div className="w-full bg-[#10141e]/90 border border-slate-800/80 rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1c212d] border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl sm:text-3xl shrink-0 shadow-[0_0_25px_rgba(245,158,11,0.25)]">
            <MdOutlineImageSearch />
          </div>
          {/* Text */}
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight">
              Stream in Flawless Cinema Fidelity
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl leading-relaxed font-normal">
              Available on smart TVs, Apple TV, Chromecast, and desktop browsers with dynamic bit-rate optimization.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto justify-end shrink-0">
          <button className="btn btn-sm sm:btn-md rounded-full bg-[#1f2533] hover:bg-[#283042] text-slate-200 border border-slate-700/60 font-semibold px-5 sm:px-6 transition-all duration-200 text-xs sm:text-sm">
            Explore Devices
          </button>
          <button className="btn btn-sm sm:btn-md rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold border-none px-6 sm:px-7 transition-all duration-200 shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.6)] text-xs sm:text-sm">
            Start Browsing
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cta

