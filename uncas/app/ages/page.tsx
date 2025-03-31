import AgesChart from "@/components/display/AgesChart";
import AgesText from "@/components/display/AgesText";

const AgesContainer = () => {
  return (
    <div className="h-[500px] w-full flex flex-col justify-center items-center">
      <AgesChart />
      <AgesText />
    </div>
  )
}
export default AgesContainer;