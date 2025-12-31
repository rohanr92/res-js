import ReviewCard from '@/components/ReviewCard';
import React from 'react';


const reviewFetching = async () => {
    const res = await fetch(' https://taxi-kitchen-api.vercel.app/api/v1/reviews', 
        { cache: 'no-store' });
    const data = await res.json();
    return data;
}

export const metadata = {
  title: "Reviews - MS Restaurants",
  description: "Best food delivery app in town",
};

const page = async () => {

    const reviewData = await reviewFetching();

    console.log(reviewData);

    const reviewsData = reviewData.reviews;


    return (
        <div className='p-10 space-y-8'>
            <h2 className='text-4xl font-bold'>Our all users review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    reviewsData.map((review) => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default page;