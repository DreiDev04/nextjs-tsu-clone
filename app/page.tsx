import Bento from "./_Components/Bento";
import Hero from "./_Components/Hero";
import Navbar from "./_Components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Navbar />
      <Hero />
      <Bento />

      <div className="w-full h-screen bg-red-500 z-50">asd</div>
    </div>
  );
}
