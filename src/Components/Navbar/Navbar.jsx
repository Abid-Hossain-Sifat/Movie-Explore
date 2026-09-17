import { Link, NavLink } from "react-router"

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0b0f19] border-b border-slate-800/80 sticky top-0 z-50">
      <div className="navbar max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        {/* Logo */}
        <div className="navbar-start">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-black tracking-tight inline-flex items-center gap-0.5 select-none hover:opacity-95 transition-opacity"
          >
            <h2 className="text-white">Movie</h2>
            <h2 className="text-amber-500">Explorer</h2>
          </Link>
        </div>

        {/* Action Button / Nav Links */}
        <div className="navbar-end flex items-center gap-2 sm:gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `btn btn-sm rounded-full px-4 sm:px-5 text-sm font-semibold tracking-wide border transition-all duration-200 ${
                isActive
                  ? "bg-[#1c2230] text-amber-400 border-amber-500/40 shadow-sm"
                  : "bg-transparent hover:bg-[#161b26] text-slate-300 hover:text-white border-transparent hover:border-slate-700/50"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `btn btn-sm rounded-full px-4 sm:px-5 text-sm font-semibold tracking-wide border transition-all duration-200 ${
                isActive
                  ? "bg-[#1c2230] text-amber-400 border-amber-500/40 shadow-sm"
                  : "bg-[#161b26] hover:bg-[#202738] text-amber-500 hover:text-amber-400 border-slate-700/50 hover:border-slate-600"
              }`
            }
          >
            Movies
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
