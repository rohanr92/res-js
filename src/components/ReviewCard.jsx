import { Montserrat } from "next/font/google";
import Image from "next/image";

const poppinsFonts = Montserrat({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
//   variable: "--font-poppins",
})

export default function ReviewCard({ review }) {
  const {
    user,
    photo,
    rating,
    review: reviewText,
    likes,
    date,
  } = review;

  return (
    <div className={`${poppinsFonts.className} bg-white rounded-xl shadow-md p-5 w-full max-w-xl border-gray-300 border-[1px] font-medium`}>
      {/* Header */}
      <div className="flex items-center gap-4">
        <Image
          src={photo}
          alt={user}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{user}</h3>
          <p className="text-xs text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-lg ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="mt-4 text-gray-700 text-sm leading-relaxed">
        {reviewText}
      </p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>👍 {likes.length} likes</span>
      </div>
    </div>
  );
}
