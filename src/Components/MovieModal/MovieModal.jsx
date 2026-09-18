import { FaArrowUpRightFromSquare, FaCalendarDays, FaClock, FaGlobe, FaStar } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"
import { LuTv } from "react-icons/lu"

const MovieModal = ({ show, onClose }) => {
  if (!show) return null

  // Clean HTML from summary
  const cleanSummary = show.summary
    ? show.summary.replace(/<[^>]*>?/gm, "")
    : "No summary available."
  const posterUrl =
    show.image?.original ||
    show.image?.medium ||
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80"
  const releaseYear = show.premiered ? show.premiered.split("-")[0] : "N/A"
  const runtime = show.runtime
    ? `${show.runtime} min`
    : show.averageRuntime
    ? `${show.averageRuntime} min`
    : "N/A"
  const rating = show.rating?.average ? show.rating.average : "N/A"
  const network = show.network?.name || show.webChannel?.name || "N/A"
  const externalLink = show.officialSite || show.url

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop overlay to close when clicking outside */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-[95%] sm:w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#10141e] border border-slate-700/80 rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-8 flex flex-col md:flex-row gap-5 sm:gap-8">
        {/* Close Button (Top Right) */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1c2233] hover:bg-[#28324a] text-slate-400 hover:text-white border border-slate-700/60 flex items-center justify-center transition-colors text-lg z-20"
          title="Close"
        >
          <IoClose />
        </button>

        {/* Left Column: Poster & Action Button */}
        <div className="w-full md:w-72 shrink-0 flex flex-col items-center">
          <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-xl border border-slate-700/60 bg-slate-900">
            <img
              src={posterUrl}
              alt={show.name}
              className="w-full h-full object-cover"
            />
            {/* Top Quality Badge */}
            <div className="absolute top-2.5 left-2.5">
              <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-xs font-bold text-slate-200 border border-white/10">
                {show.type || "4K HDR"}
              </span>
            </div>
            {/* Top Rating Badge */}
            <div className="absolute top-2.5 right-2.5">
              <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-xs font-bold text-amber-400 border border-white/10 flex items-center gap-1">
                <FaStar className="text-xs fill-amber-400" />
                <span>{rating}</span>
              </span>
            </div>
          </div>

          {/* Official Site External Button */}
          {externalLink && (
            <a
              href={externalLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm w-full rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold border-none mt-4 transition-all shadow-[0_2px_15px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              <span>Official Site</span>
              <FaArrowUpRightFromSquare className="text-xs" />
            </a>
          )}
        </div>

        {/* Right Column: In-depth Details */}
        <div className="flex-1 flex flex-col justify-between pt-1">
          <div>
            {/* Show Title */}
            <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-2 pr-8">
              {show.name}
            </h2>

            {/* Genres Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {show.genres && show.genres.length > 0 ? (
                show.genres.map((g) => (
                  <span
                    key={g}
                    className="px-2.5 py-0.5 rounded-full bg-[#1a2130] text-amber-400 text-xs font-semibold border border-slate-700/60"
                  >
                    {g}
                  </span>
                ))
              ) : (
                <span className="px-2.5 py-0.5 rounded-full bg-[#1a2130] text-amber-400 text-xs font-semibold border border-slate-700/60">
                  Drama
                </span>
              )}
            </div>

            {/* Quick Metadata Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#151a27] border border-slate-800/80 mb-5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <FaStar className="text-amber-400 shrink-0" />
                <span>
                  Rating: <strong className="text-white">{rating}</strong>/10
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarDays className="text-amber-400 shrink-0" />
                <span>
                  Premiered: <strong className="text-white">{releaseYear}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-amber-400 shrink-0" />
                <span>
                  Runtime: <strong className="text-white">{runtime}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <LuTv className="text-amber-400 shrink-0" />
                <span>
                  Network: <strong className="text-white">{network}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaGlobe className="text-amber-400 shrink-0" />
                <span>
                  Lang: <strong className="text-white">{show.language || "English"}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                <span>
                  Status: <strong className="text-white">{show.status || "Ended"}</strong>
                </span>
              </div>
            </div>

            {/* Storyline / Summary */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Storyline
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {cleanSummary}
              </p>
            </div>

            {/* Schedule info if available */}
            {show.schedule?.days?.length > 0 && (
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-1.5">
                <span className="font-semibold text-slate-300">Broadcast:</span>
                <span>
                  {show.schedule.days.join(", ")}{" "}
                  {show.schedule.time ? `at ${show.schedule.time}` : ""}
                </span>
              </div>
            )}
          </div>

          {/* Modal Footer Close Button */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-sm rounded-xl bg-[#1c2233] hover:bg-[#28324a] text-slate-300 hover:text-white border border-slate-700/60 px-5 text-xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal

