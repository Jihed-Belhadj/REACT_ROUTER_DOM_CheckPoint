import React from 'react'
import ReactStars from "react-rating-stars-component";
import{useState} from 'react'

function StarRating({Rating,setRating}) {
  const ratingChanged = (newRating) => {
    setRating(newRating)
    console.log(newRating)
  };
  return (
    <div>
       <ReactStars
          count={5}
          onChange={ratingChanged}
          size={50}
          activeColor="#ffd700"
          isHalf={true}
        />
    </div>
  )
}

export default StarRating
