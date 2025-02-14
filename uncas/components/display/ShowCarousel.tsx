

//import { useEffect } from "react";

const testArray = [
  'person one',
  'person two',
  'person three'
];

const displayArray = [
  'text for person one',
  'text for person one',
  'text for person one'
];

const setAllTypesOfThangs = (i: number):number => {
  
  // const [num, setNum] = useState(i);
  // useEffect(() => {
  //   setNum(i);
    return i
  // }, [i])
};

let vari = 0

const ShowCarousel = ({arrIndex}: {arrIndex: number}) => {
  // useEffect(() => {
    vari = setAllTypesOfThangs(arrIndex);
    
  // }, [arrIndex]);

  return (
    <div>{testArray[arrIndex]}</div>
  )
}
export default ShowCarousel;

export const ShowDisplay = () => {
  return (
    <div className="">{displayArray[vari]}</div>
  )
};

