'use client';

//import { useState, useEffect } from "react";

const testArray = [
  'person one',
  'person two',
  'person three'
];

// const displayArray = [
//   'text for persone one',
//   'text for persone one',
//   'text for persone one'
// ];

const ShowCarousel = ({arrIndex}: number = 0) => {
  return (
    <div>{testArray[arrIndex]}</div>
  )
}
export default ShowCarousel

