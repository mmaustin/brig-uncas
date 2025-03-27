import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-center items-center opacity-50 sticky top-0 backdrop-blur-md h-[100px] bg-green-800 z-50">
      <div className="hidden md:flex gap-8 w-full">
        <Navbar />
      </div>
      <div className="md:hidden w-full container mx-4">
        <MobileNav />
      </div>
    </header>
  );
};
export default Header;