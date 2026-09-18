import { useEffect, useState } from "react"
import { FaArrowTrendUp, FaBookmark, FaRegBookmark, FaStar } from "react-icons/fa6"
import { IoClose, IoSearch } from "react-icons/io5"
import { LuBadgeCheck } from "react-icons/lu"
import { MdOutlineMovieFilter } from "react-icons/md"
import MovieModal from "../MovieModal/MovieModal"

const Movies = () => {
  const [allShows, setAllShows] = useState([]) 
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedShow, setSelectedShow] = useState(null)
  const [bookmarkedIds, setBookmarkedIds] = useState(new Set())

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        setAllShows(data)
        setShows(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to fetch shows:", err)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const query = searchQuery.trim()

    if (!query) {
      setShows(allShows)
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    const timer = setTimeout(() => {
      fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
          const searchResults = data
            .map((item) => item.show)
            .filter((show) => Boolean(show && show.id))

          setShows(searchResults)
          setIsSearching(false)
        })
        .catch((err) => {
          console.error("Failed to search shows:", err)
          setIsSearching(false)
        })
    }, 350)

    return () => clearTimeout(timer)
  }, [searchQuery, allShows])

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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        <p className="text-slate-400 text-sm font-medium">Loading movies & shows...</p>
      </div>
    )
  }

  return (
    <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto py-6 sm:py-8 md:py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-10 pb-5 sm:pb-6 border-b border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Curated Cinema Library
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Explore All <span className="text-amber-500">Movies & Shows</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
            Discover curated blockbuster hits, gripping thrillers, and cinematic masterpieces from around the world.
          </p>
        </div>

        {/* Results Counter */}
        <div className="text-xs sm:text-sm text-slate-400 shrink-0 font-medium">
          {searchQuery.trim() ? (
            <span>
              Found <strong className="text-amber-400 font-bold">{shows.length}</strong> results for &ldquo;{searchQuery}&rdquo;
            </span>
          ) : (
            <span>
              Showing <span className="text-amber-400 font-bold">{shows.length}</span> titles
            </span>
          )}
        </div>
      </div>

      <div className="relative mb-6 sm:mb-8">
        <IoSearch className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base sm:text-lg pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a movie or show by title (e.g. Girls, Arrow, Gotham)..."
          className="w-full bg-[#10141e] border border-slate-800 hover:border-slate-700 focus:border-amber-500/80 rounded-xl pl-10 sm:pl-11 pr-12 sm:pr-16 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all shadow-inner"
        />

        {/* Right action area */}
        <div className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {isSearching && (
            <div className="w-4 h-4 rounded-full border-2 border-amber-500/30 border-t-amber-500 animate-spin" />
          )}
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer p-0.5"
              title="Clear search"
            >
              <IoClose className="text-lg" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Cards */}
      {shows.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {shows.map((show) => {
            const cleanSummary = show.summary ? show.summary.replace(/<[^>]*>?/gm, "") : "No summary available."
            const releaseYear = show.premiered ? show.premiered.split("-")[0] : "N/A"
            const runtime = show.runtime ? `${show.runtime}m` : show.averageRuntime ? `${show.averageRuntime}m` : "60m"
            const primaryGenre = show.genres?.[0] || "Drama"
            const posterUrl =
              show.image?.original ||
              show.image?.medium ||
              "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80"
            const ratingVal = show.rating?.average ? show.rating.average : "N/A"
            const networkName = show.network?.name || show.webChannel?.name || "Original"
            const qualityTag = show.quality || show.type || "4K HDR"
            const isBookmarked = bookmarkedIds.has(show.id)

            return (
              <div
                key={show.id}
                className="bg-[#10141e]/90 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700/90 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                {/* Poster Image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl m-3 mb-0 bg-slate-900">
                  <img
                    src={posterUrl}
                    alt={show.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient Fade Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Quality Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-slate-200 border border-white/10 tracking-wider">
                      {qualityTag}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-amber-400 border border-white/10 flex items-center gap-1">
                      <FaStar className="text-[10px] fill-amber-400" />
                      <span>{ratingVal}</span>
                    </span>
                  </div>
                </div>

                {/* Information Section */}
                <div className="p-4 sm:p-5 pt-3.5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Metadata Header: Year, Duration, Genre */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <span>{releaseYear}</span>
                      <span>•</span>
                      <span>{runtime}</span>
                      <span>•</span>
                      <span className="text-amber-400 font-semibold">{primaryGenre}</span>
                    </div>

                    {/* Show Title */}
                    <h3 className="text-base sm:text-lg font-black text-white tracking-tight line-clamp-1 group-hover:text-amber-400 transition-colors mt-1.5">
                      {show.name}
                    </h3>

                    {/* Summary Description */}
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mt-1.5 mb-4 font-normal">
                      {cleanSummary}
                    </p>
                  </div>

                  {/* Network Info & Interactive Bookmark Button */}
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
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all cursor-pointer ${
                        isBookmarked
                          ? "bg-amber-500/20 text-amber-400 border-amber-500/50"
                          : "bg-[#181d29] hover:bg-[#242c3d] text-slate-400 hover:text-white border-slate-700/50"
                      }`}
                      title={isBookmarked ? "Remove Bookmark" : "Save Show"}
                    >
                      {isBookmarked ? (
                        <FaBookmark className="text-xs fill-current" />
                      ) : (
                        <FaRegBookmark className="text-xs" />
                      )}
                    </button>
                  </div>

                  {/* See Details Action Button */}
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
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center rounded-2xl bg-[#10141e]/50 border border-slate-800/80">
          <div className="w-16 h-16 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-3xl text-amber-500 mb-4">
            <MdOutlineMovieFilter />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No shows found</h3>
          <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
            We couldn&apos;t find any shows matching &ldquo;{searchQuery}&rdquo;. Try searching with a different movie title.
          </p>
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="btn btn-sm rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold border-none px-6 text-xs cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Details Modal */}
      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  )
}

export default Movies
