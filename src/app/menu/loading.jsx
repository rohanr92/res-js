import DataCardSkeleton from '@/components/DataCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            <div className="grid grid-cols-12 mt-16 p-6 gap-5">
  <div className="col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[...Array(12)].map((_, i) => (
      <DataCardSkeleton key={i} />
    ))}
  </div>

  <div className="col-span-3">
    <div className="sticky top-24 p-6 border-2 rounded-2xl h-[300px] bg-white animate-pulse" />
  </div>
</div>

        </div>
    );
};

export default loading;