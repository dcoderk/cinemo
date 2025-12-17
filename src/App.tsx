import { Navigation } from "./components/Navigation";
import { HeroSlider } from "./components/HeroSlider";
import { TrendingMovies } from "./components/TrendingMovies";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSlider />
        <TrendingMovies />
      </main>
      <Footer />
    </div>
  );
}