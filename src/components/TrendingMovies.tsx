import { useState } from "react";
import { MovieCard } from "./MovieCard";
import { MovieModal } from "./MovieModal";

const trendingMovies = [
  {
    id: 1,
    title: "Midnight Shadows",
    year: "2024",
    rating: "8.2",
    genre: "Horror",
    duration: "1h 58m",
    poster: "https://images.unsplash.com/photo-1712456298333-5747a9506a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTc3MDM5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A psychological horror that delves into the darkest corners of the human mind, where nightmares become reality and shadows hold deadly secrets.",
    director: "Sarah Mitchell",
    cast: ["Emma Stone", "Oscar Isaac", "Tilda Swinton"],
    plot: "Dr. Elena Vasquez, a renowned sleep researcher, discovers that her patients' nightmares are beginning to manifest in the real world. As she investigates deeper, she realizes that an ancient entity feeds on fear and is using dreams as a gateway to our reality. Racing against time, Elena must confront her own darkest fears to stop the entity before it consumes everything she holds dear."
  },
  {
    id: 2,
    title: "Urban Legends",
    year: "2024",
    rating: "7.6",
    genre: "Action",
    duration: "2h 15m",
    poster: "https://images.unsplash.com/photo-1739891251370-05b62a54697b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTc3NTE5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "An underground street racer turned vigilante fights corruption in the city's elite circles, using his driving skills and street smarts to bring justice.",
    director: "Marcus Chen",
    cast: ["John Boyega", "Zendaya", "Michael Shannon"],
    plot: "Marcus Rivera was once the king of underground racing until a corrupt police operation destroyed his crew and killed his brother. Two years later, he emerges from hiding to take down the criminal network that spans from street gangs to city hall. With nothing but his modified car and a burning desire for justice, Marcus becomes an urban legend - a ghost who strikes fear into the hearts of the corrupt."
  },
  {
    id: 3,
    title: "Stellar Odyssey",
    year: "2024",
    rating: "9.1",
    genre: "Sci-Fi",
    duration: "2h 42m",
    poster: "https://images.unsplash.com/photo-1529271247619-1f9736e6e8ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTc3NjM1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A breathtaking space epic that follows humanity's first journey to a distant galaxy, where they discover civilizations beyond their wildest imagination.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Amy Adams", "Mahershala Ali"],
    plot: "When Earth faces an extinction-level event, the spacecraft Prometheus embarks on a 50-year journey to the Andromeda Galaxy. Captain Sarah Chen and her crew of 200 must navigate through cosmic anomalies, alien civilizations, and the psychological challenges of deep space travel. What they discover challenges everything humanity believes about life, consciousness, and our place in the universe."
  },
  {
    id: 4,
    title: "The Artist's Heart",
    year: "2024",
    rating: "8.8",
    genre: "Drama",
    duration: "1h 47m",
    poster: "https://images.unsplash.com/photo-1745564371387-7707cc41e958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMG1vdmllJTIwcG9zdGVyfGVufDF8fHx8MTc1NzcxMjcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A moving story about a painter who loses her sight but discovers new ways to see the world and create art through the relationships she builds.",
    director: "Greta Gerwig",
    cast: ["Saoirse Ronan", "Timothée Chalamet", "Frances McDormand"],
    plot: "Isabella Rodriguez is a celebrated contemporary artist whose life changes forever when a rare illness threatens her eyesight. As her vision fades, she struggles with her identity and purpose until she meets David, a street musician, and Elena, a young art student. Together, they help her discover that art isn't just about what you see—it's about what you feel, remember, and imagine."
  },
  {
    id: 5,
    title: "Cinema Paradiso",
    year: "2024",
    rating: "8.5",
    genre: "Comedy",
    duration: "2h 8m",
    poster: "https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWElMjBwb3N0ZXJ8ZW58MXx8fHwxNzU3NzYxNDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A heartwarming comedy about a group of friends who inherit an old movie theater and must save it from demolition while rediscovering their love for cinema.",
    director: "Edgar Wright",
    cast: ["Simon Pegg", "Nick Frost", "Kristen Wiig"],
    plot: "When projectionist Frank Murphy passes away, he leaves his beloved independent cinema to his three best friends from film school. Now successful but disillusioned adults, they must band together to save the theater from a corporate buyout. Along the way, they rediscover their passion for movies and the magic of bringing stories to life on the big screen."
  },
  {
    id: 6,
    title: "Laugh Out Loud",
    year: "2024",
    rating: "7.8",
    genre: "Comedy",
    duration: "1h 52m",
    poster: "https://images.unsplash.com/photo-1572700432881-42c60fe8c869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTc2ODM1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A hilarious misadventure about an aspiring comedian who accidentally becomes an international sensation after a viral video mishap.",
    director: "Judd Apatow",
    cast: ["Amy Schumer", "Seth Rogen", "Mindy Kaling"],
    plot: "When stand-up comedian Maya Rodriguez's disastrous performance gets accidentally livestreamed to millions, she becomes a viral sensation for all the wrong reasons. Now she must navigate newfound fame while staying true to her comedic voice and winning back the respect of her peers in the comedy world."
  },
  {
    id: 7,
    title: "Forever Yours",
    year: "2024",
    rating: "8.3",
    genre: "Romance",
    duration: "2h 12m",
    poster: "https://images.unsplash.com/photo-1746980931930-d8e69847d633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbW92aWUlMjBwb3N0ZXJ8ZW58MXx8fHwxNzU3Nzc3NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A sweeping romantic epic that follows two souls destined to find each other across different lifetimes and realities.",
    director: "Chloe Zhao",
    cast: ["Ryan Gosling", "Emma Stone", "Mahershala Ali"],
    plot: "Dr. Sarah Chen, a quantum physicist, discovers that consciousness can transcend time and space. When she meets architect David Harper, they both experience vivid memories of past lives together. As they explore their connection, they must decide whether their love is strong enough to break the cycle that has kept them apart for centuries."
  },
  {
    id: 8,
    title: "Dark Secrets",
    year: "2024",
    rating: "8.7",
    genre: "Thriller",
    duration: "2h 18m",
    poster: "https://images.unsplash.com/photo-1710988486821-9af47f60d62b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwcG9zdGVyfGVufDF8fHx8MTc1Nzc3NzUyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A psychological thriller about a detective who discovers that her own memories might be fabricated as she investigates a series of mysterious disappearances.",
    director: "Denis Villeneuve",
    cast: ["Lupita Nyong'o", "Oscar Isaac", "Benedict Cumberbatch"],
    plot: "Detective Lisa Warren has solved every case she's touched, but when she investigates the disappearance of five people from her hometown, she begins experiencing strange flashbacks. As the investigation deepens, she realizes that her perfect memory might be hiding a dark secret about her own past and her connection to the missing persons."
  },
  {
    id: 9,
    title: "Quest for Eldoria",
    year: "2024",
    rating: "8.9",
    genre: "Adventure",
    duration: "2h 35m",
    poster: "https://images.unsplash.com/photo-1541938434-311f13db9500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTc3Nzc1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "An epic adventure following a young archaeologist who discovers an ancient map leading to a lost civilization with the power to change the world.",
    director: "James Cameron",
    cast: ["Tom Holland", "Zendaya", "Morgan Freeman"],
    plot: "When archaeology student Alex Morgan uncovers a 3,000-year-old map in the ruins of an ancient temple, she embarks on a globe-spanning adventure to find Eldoria, a lost civilization said to possess technology that could solve the world's energy crisis. Racing against a secret organization that wants to use Eldoria's power for evil, Alex must prove herself worthy of the ancient knowledge."
  },
  {
    id: 10,
    title: "Realm of Dragons",
    year: "2024",
    rating: "9.2",
    genre: "Fantasy",
    duration: "2h 48m",
    poster: "https://images.unsplash.com/photo-1719968114551-f809e52e2201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbW92aWUlMjBwb3N0ZXJ8ZW58MXx8fHwxNzU3Nzc3NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A breathtaking fantasy epic about the last dragon rider who must unite the fractured kingdoms to defend against an ancient evil awakening.",
    director: "Peter Jackson",
    cast: ["Anya Taylor-Joy", "Dev Patel", "Ian McKellen"],
    plot: "In the magical realm of Aethermoor, young Lyra discovers she's the last in a bloodline of dragon riders. When the Dark Lord Malachar breaks free from his thousand-year prison, she must forge alliances with warring kingdoms, master her newfound powers, and bond with Skyfire, the last dragon, to prevent the realm from falling into eternal darkness."
  }
];

export function TrendingMovies() {
  const [selectedMovie, setSelectedMovie] = useState<typeof trendingMovies[0] | null>(null);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Trending Movies</h2>
          <a href="#" className="text-primary hover:underline">View All</a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {trendingMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          isOpen={!!selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </section>
  );
}