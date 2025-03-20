
type CaptiveTraits = {
  index: number,
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
      <div className="flex flex-col justify-center items-center">
        {
          captive.index <= 68 ? <p><span className="text-yellow-300">*</span> {captive.index})</p> : null
        }
        <p className="text-center">
          {captive.name}
        </p>
      </div>
      <p>{captive.age}</p>
      <p>{captive.feet}</p>
      <p>{captive.inches}</p>
      <p>{captive.colour}</p>
    </div>
  )
}
export default ShowCarousel;


