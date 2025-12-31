export default function ReviewCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-xl animate-pulse mt-5">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0" />

        <div className="flex-1">
          <div className="h-4 w-40 bg-gray-200 rounded mb-2" />
          <div className="h-3 w-28 bg-gray-200 rounded" />
        </div>

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded" />
          ))}
        </div>
      </div>

      {/* Review text — increased lines to match real content */}
      <div className="mt-5 space-y-3">
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-11/12 bg-gray-200 rounded" />
        <div className="h-3 w-9/12 bg-gray-200 rounded" />
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between">
        <div className="h-3 w-24 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
