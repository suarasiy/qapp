import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import NavbarUtils from "./ui/NavbarUtils";
import Main from "./ui/components/Sourates/Main";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-9 pt-3">
      {/* backdrop */}
      <div className="pointer-events-none fixed top-0 z-[1] h-32 w-full bg-gradient-to-b from-background via-background to-transparent"></div>
      <div className="sticky top-[-25px] z-10 flex gap-4">
        <Navbar />
        <NavbarUtils />
      </div>
      <Main />
      <Footer />
    </div>
  );
}
