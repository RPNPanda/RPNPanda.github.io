import { Download as DownloadIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { useReveal } from "@/hooks/use-reveal";

const legacy = [
  {
    title: "Cold War — Steam Loader",
    desc: "Legacy Steam build for Call of Duty: Black Ops Cold War.",
    url: "https://raw.githubusercontent.com/RPNPanda/RPNPanda.github.io/main/Steam-Loader.zip",
  },
  {
    title: "Cold War — Battle.net Loader",
    desc: "Legacy Battle.net build for Call of Duty: Black Ops Cold War.",
    url: "https://raw.githubusercontent.com/RPNPanda/RPNPanda.github.io/main/BattleNet-Loader.zip",
  },
  {
    title: "Cold War — Offsets",
    desc: "Standalone offsets archive for legacy Cold War tooling.",
    url: "https://raw.githubusercontent.com/RPNPanda/RPNPanda.github.io/main/RPNMods%20CW%20Offsets.zip",
  },
  {
    title: "1v1.lol Cheat",
    desc: "Original RPN Mods 1v1.lol modification.",
    url: "https://raw.githubusercontent.com/RPNPanda/RPNPanda.github.io/main/1v1.lolcheat.zip",
  },
];

const DownloadLegacy = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Layout>
      <div ref={ref} className="container max-w-4xl">
        <section className="text-center py-10 md:py-14">
          <p className="reveal text-sm uppercase tracking-widest font-mono text-primary mb-3">Archive</p>
          <h1 className="reveal text-5xl md:text-6xl font-display font-bold tracking-tight">
            Legacy <span className="text-gradient-brand">Vault</span>
          </h1>
          <p className="reveal mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Older RPN Mods loaders, kept around for posterity. Provided as-is.
          </p>
        </section>

        <section className="grid sm:grid-cols-2 gap-4">
          {legacy.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="reveal group glass rounded-2xl p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold leading-tight">{item.title}</h3>
                <DownloadIcon className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-y-0.5 transition-transform" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              <div className="text-xs font-mono text-primary/80 mt-auto">.zip · GitHub</div>
            </a>
          ))}
        </section>

        <div className="reveal mt-12 text-center">
          <Button asChild variant="glass">
            <Link to="/download"><ArrowLeft className="w-4 h-4" /> Back to Downloads</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DownloadLegacy;
