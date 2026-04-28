import { Link } from "react-router-dom";
import { Download as DownloadIcon, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { useReveal } from "@/hooks/use-reveal";
import bo6 from "@/assets/bo6.png";
import bo7 from "@/assets/bo7.png";

const FEATURES = [
  "Player Box ESP",
  "Visual Check ESP",
  "Visual Check Aimbot",
  "Health Bar",
  "Xbox / Steam / Battle.net support",
  "Snaplines",
  "Aimbot",
  "Directional arrows",
  "Crosshair",
  "Player distance",
  "Configs",
  "And more…",
];

type Product = {
  title: string;
  art: string;
  badge: string;
  status: "available" | "updating";
  updated: string;
  url?: string;
};

const products: Product[] = [
  {
    title: "Black Ops 6",
    art: bo6,
    badge: "DMA · Latest",
    status: "available",
    updated: "April 17, 2026",
    url: "https://raw.githubusercontent.com/RPNPanda/RPNPanda.github.io/refs/heads/gh-pages/downloads/RPNMods%20COD%20Loader_6.zip",
  },
  {
    title: "Black Ops 7",
    art: bo7,
    badge: "DMA · Updating",
    status: "updating",
    updated: "Pending patch sync",
  },
];

const ProductCard = ({ p }: { p: Product }) => {
  const handleDownload = () => {
    if (p.url) window.open(p.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="reveal group relative rounded-3xl overflow-hidden glass shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-500">
      {/* Art */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={p.art}
          alt={p.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 text-xs font-mono rounded-full bg-background/80 backdrop-blur border border-primary/40 text-primary">
            {p.badge}
          </span>
        </div>
        <div className="absolute bottom-4 left-5 right-5">
          <h2 className="font-display text-3xl font-bold tracking-tight">{p.title}</h2>
          <p className="text-xs text-muted-foreground mt-1 inline-flex items-center gap-1.5">
            <Clock className="w-3 h-3" /> {p.updated}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7">
        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-7">
          {FEATURES.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {p.status === "available" ? (
          <Button onClick={handleDownload} variant="hero" size="lg" className="w-full">
            <DownloadIcon className="w-4 h-4" /> Download Now
          </Button>
        ) : (
          <Button disabled variant="secondary" size="lg" className="w-full opacity-70">
            <Clock className="w-4 h-4 animate-pulse" /> Updating soon
          </Button>
        )}
      </div>
    </div>
  );
};

const Download = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Layout>
      <div ref={ref} className="container max-w-6xl">
        <section className="text-center py-10 md:py-14">
          <div className="reveal inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow mb-6">
            <DownloadIcon className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="reveal text-5xl md:text-6xl font-display font-bold tracking-tight">
            Download <span className="text-gradient-brand">RPN Mods</span>
          </h1>
          <p className="reveal mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Pick your loader. Grab a key. Drop into the lobby.
          </p>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          {products.map((p) => <ProductCard key={p.title} p={p} />)}
        </section>

        <section className="reveal mt-16 glass rounded-2xl p-8 md:p-10 text-center shadow-card">
          <p className="text-sm uppercase tracking-widest font-mono text-muted-foreground mb-2">Archive</p>
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">Looking for older RPN products?</h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
            Cold War, 1v1.lol, and historical Steam / Battle.net loaders are still available.
          </p>
          <Button asChild variant="glass" size="lg">
            <Link to="/download-legacy">Open Legacy Vault <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default Download;
