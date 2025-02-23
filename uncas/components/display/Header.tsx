import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-center items-center opacity-50 sticky top-0 backdrop-blur-md h-[120px] bg-white z-50">
      <div className="container hidden md:flex gap-8 rounded-full">
        <Navbar />
      </div>
      <div className="md:hidden w-full container mx-4">
        <MobileNav />
      </div>
    </header>
  );
};
export default Header;