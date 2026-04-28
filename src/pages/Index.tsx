import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Zap, RefreshCcw, KeyRound, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { useReveal } from "@/hooks/use-reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Read-Only & Safe",
    body: "All RPN DMA cheats are strictly read-only — no memory writes, no detection vectors, no risk to your account.",
  },
  {
    icon: Zap,
    title: "Zero-Impact Performance",
    body: "Hardware-accelerated DMA pipeline keeps your in-game FPS untouched. Tournament-grade latency.",
  },
  {
    icon: RefreshCcw,
    title: "Same-Day Updates",
    body: "Offsets and features are pushed within hours of every game patch. Never get left behind.",
  },
];

const stats = [
  { value: "10K+", label: "Active users" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Read-only safe" },
];

const Index = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Layout>
      <div ref={ref} className="container">
        {/* Hero */}
        <section className="relative py-12 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-8">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Now supporting Black Ops 6 — BO7 launching soon
            </div>

            <h1 className="reveal font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tighter">
              Premium DMA cheats,
              <br />
              <span className="text-gradient-brand">engineered to win.</span>
            </h1>

            <p className="reveal mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Read-only DMA loaders for Call of Duty: Black Ops 6 & 7. Undetected by design,
              brutally fast in execution, updated the moment the game patches.
            </p>

            <div className="reveal mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/download">
                  Download Now <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/key-system">
                  <KeyRound className="w-4 h-4" />
                  Get Your Key
                </Link>
              </Button>
            </div>

            {/* Floating product peek */}
            <div className="reveal relative mt-20 mx-auto max-w-3xl">
              <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <div className="relative glass rounded-2xl p-2 shadow-elevated">
                <div className="rounded-xl bg-background/60 px-5 py-4 flex items-center justify-between text-left">
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-success shadow-[0_0_12px_hsl(var(--success))]" />
                    <div>
                      <div className="text-sm font-mono text-foreground">RPNMods_BO6_Loader.exe</div>
                      <div className="text-xs text-muted-foreground">Status: <span className="text-success">Online</span> · v.latest</div>
                    </div>
                  </div>
                  <Button asChild size="sm" variant="default">
                    <Link to="/download"><Download className="w-3.5 h-3.5" /> Get</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="reveal text-sm font-mono uppercase tracking-widest text-primary mb-3">Why RPN</p>
            <h2 className="reveal text-4xl md:text-5xl font-display font-bold tracking-tight">
              Built different. <span className="text-gradient">Played better.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="reveal group relative p-7 rounded-2xl glass shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-[0.06] transition-opacity" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow mb-5">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="reveal glass rounded-3xl p-10 md:p-14 shadow-elevated relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-[0.04]" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl md:text-5xl font-bold text-gradient-brand">{s.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="reveal relative rounded-3xl overflow-hidden p-10 md:p-16 text-center glass shadow-elevated">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-primary opacity-30 blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
                Ready to <span className="text-gradient-brand">dominate?</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                Grab your key, download the loader, drop into a match. It's that simple.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="hero" size="xl">
                  <Link to="/key-system">Start Now <ArrowRight className="w-4 h-4" /></Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <a href="https://discord.gg/3uSUPHugtQ" target="_blank" rel="noreferrer">Join Discord</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
