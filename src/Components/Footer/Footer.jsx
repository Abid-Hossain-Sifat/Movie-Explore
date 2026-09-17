import { Link, NavLink } from "react-router"

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0f19] border-t border-slate-800/60 py-10 sm:py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-5 sm:gap-6">
        {/* Brand Logo */}
        <div>
          <Link
            to="/"
            className="text-xl sm:text-2xl font-black tracking-tight inline-flex items-center gap-0.5 select-none hover:opacity-90 transition-opacity"
          >
            <span className="text-white">Movie</span>
            <span className="text-amber-500">Explorer</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-medium">
          <NavLink
            to="/movies"
            className="text-slate-300 hover:text-amber-400 transition-colors"
          >
            Movies
          </NavLink>
          <NavLink
            to="/browse"
            className="text-slate-300 hover:text-amber-400 transition-colors"
          >
            Browse
          </NavLink>
          <NavLink
            to="/trending"
            className="text-slate-300 hover:text-amber-400 transition-colors"
          >
            Trending
          </NavLink>
          <NavLink
            to="/privacy-policy"
            className="text-slate-300 hover:text-amber-400 transition-colors"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/terms-of-service"
            className="text-slate-300 hover:text-amber-400 transition-colors"
          >
            Terms of Service
          </NavLink>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            © 2025 MovieExplorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

