const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 py-12">
      <div className="relative flex items-center justify-center">
        <div className="w-14 h-14 rounded-full border-4 border-slate-800 border-t-amber-500 animate-spin" />
        <div className="absolute w-8 h-8 rounded-full border-2 border-amber-400/30 border-b-amber-400 animate-spin" />
      </div>
      <p className="text-slate-400 text-sm font-medium tracking-wide animate-pulse">
        Loading cinema collection...
      </p>
    </div>
  )
}

export default Loading
