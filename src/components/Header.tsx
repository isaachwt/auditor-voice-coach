
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ease-in-out",
        scrolled ? "backdrop-blur-lg bg-white/70 dark:bg-black/70 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-semibold"
        >
          <span className="text-auditor-500">Auditor</span>
          <span className="text-gray-800 dark:text-gray-200">Coach</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" active={location.pathname === "/"}>
            Home
          </NavLink>
          <NavLink to="/interview" active={location.pathname === "/interview"}>
            Practice
          </NavLink>
          <NavLink to="/leaderboard" active={location.pathname === "/leaderboard"}>
            Leaderboard
          </NavLink>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link
            to="/interview"
            className={cn(
              "px-4 py-2 rounded-full font-medium text-sm transition-all",
              "bg-auditor-500 text-white hover:bg-auditor-600",
              "shadow-sm hover:shadow-md"
            )}
          >
            Start Interview
          </Link>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "text-sm font-medium transition-colors relative px-1 py-1.5",
        active 
          ? "text-auditor-500 dark:text-auditor-300" 
          : "text-gray-600 dark:text-gray-300 hover:text-auditor-500 dark:hover:text-auditor-300"
      )}
    >
      {children}
      {active && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-auditor-500 dark:bg-auditor-300 rounded-full" />
      )}
    </Link>
  );
};

export default Header;
