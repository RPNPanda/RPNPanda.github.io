import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Home, KeyRound, Download, MessageSquare } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/key-system", label: "Get Key", icon: KeyRound },
  { to: "/download", label: "Download", icon: Download },
];

const DISCORD = "https://discord.gg/3uSUPHugtQ";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl px-4 md:px-5 transition-all duration-500",
            scrolled
              ? "glass shadow-elevated h-14"
              : "bg-transparent border border-transparent h-16",
          )}
        >
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9 rounded-xl overflow-hidden ring-1 ring-border group-hover:ring-primary/60 transition-all">
              <img src={logo} alt="RPN Mods" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-30 transition-opacity" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              RPN <span className="text-gradient-brand">Mods</span>
            </span>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    "hover:text-foreground hover:bg-secondary/60",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-glow" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <a
              href={DISCORD}
              target="_blank"
              rel="noreferrer"
              className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium glass hover:border-primary/40 hover:-translate-y-0.5 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discord</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-2 animate-slide-down">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium",
                    isActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60",
                  )
                }
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            ))}
            <a
              href={DISCORD}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary/60"
            >
              <MessageSquare className="w-4 h-4" />
              Discord
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
