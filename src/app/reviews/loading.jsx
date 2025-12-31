
import ReviewCardSkeleton from '@/components/ReviewCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 p-10">
    {[...Array(12)].map((_, i) => (
      <ReviewCardSkeleton key={i} />
    ))}
  </div>

 

        </div>
    );
};

export default loading;