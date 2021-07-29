// source https://codesandbox.io/s/62x458v5pn?file=/src/Star.js
import React, { Component } from "react";
import FormImpl from "react-bootstrap/esm/Form";
import Star from "./Star";

function StaticRating({rating}) {

    const starSpans = [];

    for(let i=0; i<5; i++){         
        let star = (i < rating) ? <Star color="silver" isFilled /> : <Star color="red" />
        starSpans.push(star)
    }
    return (
        <>
            {starSpans}
        </>
    );
  }
export default StaticRating;
