import React from 'react'
import  Star from "../../../src/assets/img/star.svg";

export default function Rating(value) {
 
    const starts = Array(value).fill(Star)
  
 
  return (
     <>
      {
        starts.map((star,index)=> {return(
            <img
            key={index}
            src={Star}
            width="14"
            height="14"
            alt="star"
        />
        )})
      }
     </>
  )
}
