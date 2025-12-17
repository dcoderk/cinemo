import { Play, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    year: string;
    rating: string;
    genre: string;
    poster: string;
    duration?: string;
  };
  onClick: () => void;
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <div 
      className="group cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg">
        <ImageWithFallback
          src={movie.poster}
          alt={movie.title}
          className="w-full aspect-[2/3] object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm">{movie.rating}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                <Play className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-3">
        <h3 className="font-medium truncate">{movie.title}</h3>
        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
          <span>{movie.year}</span>
          <span>•</span>
          <span>{movie.genre}</span>
          {movie.duration && (
            <>
              <span>•</span>
              <span>{movie.duration}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}