import { Search, Menu, User, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold text-primary">MovieApp</h1>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Movies
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              TV Shows
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Genres
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Action</DropdownMenuItem>
                <DropdownMenuItem>Comedy</DropdownMenuItem>
                <DropdownMenuItem>Drama</DropdownMenuItem>
                <DropdownMenuItem>Horror</DropdownMenuItem>
                <DropdownMenuItem>Sci-Fi</DropdownMenuItem>
                <DropdownMenuItem>Romance</DropdownMenuItem>
                <DropdownMenuItem>Thriller</DropdownMenuItem>
                <DropdownMenuItem>Adventure</DropdownMenuItem>
                <DropdownMenuItem>Fantasy</DropdownMenuItem>
                <DropdownMenuItem>Documentary</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-muted rounded-full px-4 py-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search movies..."
              className="bg-transparent border-none outline-none text-sm w-48"
            />
          </div>
          
          <Button size="sm" variant="ghost" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
          
          <Button size="sm" variant="ghost">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}