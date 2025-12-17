import { X, Play, Plus, Star, Clock, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MovieModalProps {
  movie: {
    id: number;
    title: string;
    year: string;
    rating: string;
    genre: string;
    duration: string;
    poster: string;
    description: string;
    director: string;
    cast: string[];
    plot: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function MovieModal({ movie, isOpen, onClose }: MovieModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Poster */}
          <div className="relative">
            <ImageWithFallback
              src={movie.poster}
              alt={movie.title}
              className="w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-4 mb-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  <Plus className="w-5 h-5 mr-2" />
                  Watchlist
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[90vh]">
            <div className="mb-4">
              <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{movie.year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span>{movie.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {movie.genre}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">{movie.description}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Plot</h3>
                <p className="text-muted-foreground leading-relaxed">{movie.plot}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Director</h3>
                <p className="text-muted-foreground">{movie.director}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Cast</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.cast.map((actor, index) => (
                    <span 
                      key={index}
                      className="bg-muted px-3 py-1 rounded-full text-sm"
                    >
                      {actor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}