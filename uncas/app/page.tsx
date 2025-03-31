
import HomePageText from "@/components/display/HomePageText";
import DesktopHome from "@/components/display/DesktopHome";
import MobileHome from "@/components/display/MobileHome";


export default function Home() {

  return (
    <div className="w-full h-full mt-8 flex flex-col justify-center items-center text-lg font-serif gap-0">
      <HomePageText />
      <DesktopHome />
      <MobileHome />
    </div>
  );
};
