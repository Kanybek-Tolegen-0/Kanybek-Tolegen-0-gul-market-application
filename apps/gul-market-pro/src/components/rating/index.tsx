// import React, { FC, useState } from 'react'
// import { StarIcon } from '@design-system/ui'
//
// interface RatingProps {
//   totalStars: number
// }
//
// const Rating: FC<RatingProps> = ({ totalStars }) => {
//   const [rating, setRating] = useState<number>(0)
//   const [hover, setHover] = useState<number | null>(null)
//
//   return (
//     <div className="flex">
//       {[...Array(totalStars)].map((star, index) => {
//         const ratingValue = index + 1
//
//         return (
//           <label key={index}>
//             <input
//               type="radio"
//               name="rating"
//               value={ratingValue}
//               onClick={() => setRating(ratingValue)}
//               className="hidden"
//             />
//             <div onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}>
//               <StarIcon
//                 className={`cursor-pointer ${ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
//               />
//             </div>
//           </label>
//         )
//       })}
//     </div>
//   )
// }
//
// export default Rating
