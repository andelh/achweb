export default function PostLoading() {
  return (
    <div className="mx-auto mt-8 w-full">
      <div className="flex animate-pulse flex-col space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="mx-auto h-3 w-10 rounded bg-slate-700"></div>
          <div className="mx-auto h-7 w-60 rounded bg-slate-700"></div>
          <div className="mx-auto h-10 w-48 rounded bg-slate-800"></div>

          <div className="space-y-3">
            <div className="mb-8 h-96 rounded-xl bg-slate-800"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className=" h-12 rounded bg-slate-700"></div>
              <div className=" h-12 rounded bg-slate-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
