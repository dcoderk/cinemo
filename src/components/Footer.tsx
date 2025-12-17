import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">MovieApp</h3>
            <p className="text-muted-foreground">
              Your ultimate destination for discovering and watching the best movies and TV shows from around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Movies Section */}
          <div className="space-y-4">
            <h4 className="font-semibold">Movies</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Popular Movies
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                New Releases
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Top Rated
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Coming Soon
              </a>
            </div>
          </div>

          {/* Genres Section */}
          <div className="space-y-4">
            <h4 className="font-semibold">Genres</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Action
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Comedy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Drama
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Sci-Fi
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Horror
              </a>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@movieapp.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 MovieApp. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Careers
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Press
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                API
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}