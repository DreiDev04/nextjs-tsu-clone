import Bento from "./_Components/Bento";
import Explore from "./_Components/Explore";
import Hero from "./_Components/Hero";
import Navbar from "./_Components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Hero />
      </div>

      <div className="w-full h-auto z-10 relative mt-[100vh] bg-background">
        <Navbar />
        <Explore />
        <Bento />
      </div>
    </div>
  );
}
