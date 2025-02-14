
type CaptiveTraits = {
  name: string,
  age: number | string,
  feet: string,
  inches: string,
  colour: string
};

const ShowCarousel = ({captive}: {captive: CaptiveTraits}):React.ReactNode => {

  return (
    <div className="flex flex-col justify-center items-center">
      <p>{captive.name}</p>
      <p>{captive.age}</p>
      <p>{captive.feet}</p>
      <p>{captive.inches}</p>
      <p>{captive.colour}</p>
    </div>
  )
}
export default ShowCarousel;


