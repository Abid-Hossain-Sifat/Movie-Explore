import { LuClapperboard } from "react-icons/lu"
import { MdHighQuality, MdStars } from "react-icons/md"
import { RiSurroundSoundLine } from "react-icons/ri"

const Stats = () => {
    return (
        <div className="w-full max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {/* Card 1 */}
                <div className="bg-[#10141e]/90 border border-slate-800/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 hover:border-slate-700/80 transition-all duration-200">
                    <div className="w-12 h-12 rounded-xl bg-[#171d2b] border border-slate-700/40 flex items-center justify-center text-xl shrink-0 text-amber-400">
                        <LuClapperboard />
                    </div>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
                            50,000+
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide mt-0.5">
                            Mastered Titles
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#10141e]/90 border border-slate-800/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 hover:border-slate-700/80 transition-all duration-200">
                    <div className="w-12 h-12 rounded-xl bg-[#171d2b] border border-slate-700/40 flex items-center justify-center text-2xl shrink-0 text-amber-400">
                        <MdHighQuality />
                    </div>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
                            4K HDR
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide mt-0.5">
                            Ultra Fidelity
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#10141e]/90 border border-slate-800/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 hover:border-slate-700/80 transition-all duration-200">
                    <div className="w-12 h-12 rounded-xl bg-[#171d2b] border border-slate-700/40 flex items-center justify-center text-2xl shrink-0 text-amber-400">
                        <MdStars />
                    </div>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
                            98.4%
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide mt-0.5">
                            Verified Reviews
                        </p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-[#10141e]/90 border border-slate-800/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 hover:border-slate-700/80 transition-all duration-200">
                    <div className="w-12 h-12 rounded-xl bg-[#171d2b] border border-slate-700/40 flex items-center justify-center text-2xl shrink-0 text-indigo-300">
                        <RiSurroundSoundLine />
                    </div>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
                            Spatial
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide mt-0.5">
                            Dolby Atmos Audio
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats

