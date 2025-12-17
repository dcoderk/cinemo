import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Info } from "lucide-react";
import { Button } from "./ui/button";
//import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroMovies = [
  {
    id: 1,
    title: "The Quantum Heist",
    description: "In a world where time can be stolen, one thief must pull off the ultimate heist to save reality itself. A mind-bending thriller that challenges everything you think you know about time and space.",
    genre: "Sci-Fi Thriller",
    rating: "8.4",
    year: "2024",
    image: "https://images.unsplash.com/photo-1529271247619-1f9736e6e8ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTc3NjM1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Thunder Strike",
    description: "When an elite special forces unit is trapped behind enemy lines, they must fight their way through impossible odds to complete their mission and return home alive.",
    genre: "Action",
    rating: "7.9",
    year: "2024",
    image: "https://images.unsplash.com/photo-1739891251370-05b62a54697b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTc3NTE5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "The Last Echo",
    description: "A haunting tale of love, loss, and redemption that follows a musician's journey to find his place in a world that has forgotten the power of music.",
    genre: "Drama",
    rating: "8.7",
    year: "2024",
    image: "https://images.unsplash.com/photo-1745564371387-7707cc41e958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMG1vdmllJTIwcG9zdGVyfGVufDF8fHx8MTc1NzcxMjcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroMovies.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroMovies.length) % heroMovies.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroMovies.length);
  };

  const currentMovie = heroMovies[currentSlide];

  return (
    <div className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={currentMovie.image}
          alt={currentMovie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/80 px-3 py-1 rounded-full text-sm">
                {currentMovie.genre}
              </span>
              <span className="text-sm opacity-80">{currentMovie.year}</span>
              <span className="text-sm opacity-80">★ {currentMovie.rating}</span>
            </div>
            
            <h2 className="text-5xl font-bold mb-4">{currentMovie.title}</h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              {currentMovie.description}
            </p>
            
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                <Play className="w-5 h-5 mr-2" />
                Watch Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Info className="w-5 h-5 mr-2" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}