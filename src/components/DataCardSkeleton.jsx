const DataCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      
      <div className="w-full h-48 bg-gray-200" />

     
      <div className="p-4 space-y-3">
        <div className="h-4 w-24 bg-gray-200 rounded" />

        <div className="h-5 w-full bg-gray-200 rounded" />
        <div className="h-5 w-3/4 bg-gray-200 rounded" />

        <div className="flex items-center justify-between mt-4">
          <div className="h-6 w-16 bg-gray-200 rounded" />
          <div className="flex gap-2">
            <div className="h-9 w-24 bg-gray-200 rounded-lg" />
            <div className="h-9 w-24 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCardSkeleton;
