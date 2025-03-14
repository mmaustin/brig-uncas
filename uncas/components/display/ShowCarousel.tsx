
type CaptiveTraits = {
  index?: number,
  name: string,
  age: number | string,
  feet: string,
  inches: string,
  colour: string
};

// type CaptiveIndex = {
//   index: number;
// }

const ShowCarousel = ({captive}: {captive: CaptiveTraits}):React.ReactNode => {

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="">
        {
          captive.index ? <span>{captive.index})</span> : <></>
        } {captive.name}
      </p>
      <p>{captive.age}</p>
      <p>{captive.feet}</p>
      <p>{captive.inches}</p>
      <p>{captive.colour}</p>
    </div>
  )
}
export default ShowCarousel;


