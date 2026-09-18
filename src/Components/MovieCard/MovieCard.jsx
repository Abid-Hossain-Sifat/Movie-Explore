import { useEffect, useState } from "react"
import { FaArrowTrendUp, FaBookmark, FaRegBookmark, FaStar } from "react-icons/fa6"
import { LuBadgeCheck } from "react-icons/lu"
import MovieModal from "../MovieModal/MovieModal"

const MovieCard = () => {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedShow, setSelectedShow] = useState(null)
  const [bookmarkedIds, setBookmarkedIds] = useState(new Set())

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        // Take the first 4 premiere picks for the Home landing section
        setShows(data.slice(0, 4))
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to fetch trending shows:", err)
        setLoading(false)
      })
  }, [])

  // Toggle bookmark state
  const toggleBookmark = (id) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto py-6 sm:py-8 md:py-10">
      {/* Section Header */}
      <div className="mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-500 mb-1">
          Editor&apos;s Criterion
        </p>
        <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
          Trending Premiere Picks
        </h1>
      </div>

      {/* 4 Cards Grid or Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-[#10141e]/90 border border-slate-800/80 rounded-2xl p-3 animate-pulse flex flex-col justify-between min-h-[440px]"
            >
              <div className="aspect-[3/4] bg-slate-800/60 rounded-xl mb-4" />
              <div className="space-y-3 px-2 pb-2">
                <div className="h-3 w-1/2 bg-slate-800 rounded" />
                <div className="h-4 w-3/4 bg-slate-800 rounded" />
                <div className="h-3 w-full bg-slate-800/60 rounded" />
                <div className="h-9 w-full bg-slate-800/80 rounded-xl mt-4" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {shows.map((show) => {
            // Clean summary from HTML tags returned by TVMaze
            const cleanSummary = show.summary ? show.summary.replace(/<[^>]*>?/gm, "") : ""
            const releaseYear = show.premiered ? show.premiered.split("-")[0] : "N/A"
            const runtime = show.runtime ? `${show.runtime}m` : "60m"
            const primaryGenre = show.genres?.[0] || "Drama"
            const posterUrl = show.image?.original || show.image?.medium
            const ratingVal = show.rating?.average ? show.rating.average : "N/A"
            const networkName = show.network?.name || "Original"
            const qualityTag = show.type || "4K HDR"
            const isBookmarked = bookmarkedIds.has(show.id)

            return (
              <div
                key={show.id}
                className="bg-[#10141e]/90 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700/90 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl m-3 mb-0 bg-slate-900">
                  <img
                    src={posterUrl}
                    alt={show.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Quality Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-slate-200 border border-white/10 tracking-wider">
                      {qualityTag}
                    </span>
                  </div>

                  {/* Top Rating */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-amber-400 border border-white/10 flex items-center gap-1">
                      <FaStar className="text-[10px] fill-amber-400" />
                      <span>{ratingVal}</span>
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5 pt-3.5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Year, Duration, Genre */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <span>{releaseYear}</span>
                      <span>•</span>
                      <span>{runtime}</span>
                      <span>•</span>
                      <span className="text-amber-400 font-semibold">{primaryGenre}</span>
                    </div>

                    {/* Name / Title */}
                    <h3 className="text-base sm:text-lg font-black text-white tracking-tight line-clamp-1 group-hover:text-amber-400 transition-colors mt-1.5">
                      {show.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mt-1.5 mb-4 font-normal">
                      {cleanSummary}
                    </p>
                  </div>

                  {/* Network Badge & Bookmark */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 mt-auto">
                    <div className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                      {show.rating?.average && show.rating.average >= 8 ? (
                        <FaArrowTrendUp className="text-xs" />
                      ) : (
                        <LuBadgeCheck className="text-sm" />
                      )}
                      <span>{networkName}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleBookmark(show.id)}
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${
                        isBookmarked
                          ? "bg-amber-500/20 text-amber-400 border-amber-500/50"
                          : "bg-[#181d29] hover:bg-[#242c3d] text-slate-400 hover:text-white border-slate-700/50"
                      }`}
                      title={isBookmarked ? "Remove Bookmark" : "Bookmark"}
                    >
                      {isBookmarked ? (
                        <FaBookmark className="text-xs fill-current" />
                      ) : (
                        <FaRegBookmark className="text-xs" />
                      )}
                    </button>
                  </div>

                  {/* See Details Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedShow(show)}
                    className="btn btn-sm w-full rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold border-none mt-3 transition-all duration-200 shadow-[0_2px_12px_rgba(245,158,11,0.25)] hover:shadow-[0_2px_18px_rgba(245,158,11,0.45)] text-xs tracking-wide cursor-pointer"
                  >
                    See Details
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Details Modal */}
      <MovieModal
        show={selectedShow}
        onClose={() => setSelectedShow(null)}
      />
    </div>
  )
}

export default MovieCard
