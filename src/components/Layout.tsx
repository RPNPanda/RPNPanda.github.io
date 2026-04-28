import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen flex flex-col overflow-x-hidden">
    {/* Animated backdrop layers */}
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-radial blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
    </div>

    <Navbar />
    <main className="flex-1 pt-28 md:pt-32">{children}</main>
    <Footer />
  </div>
);
