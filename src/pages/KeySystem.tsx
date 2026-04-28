import { useEffect, useState } from "react";
import { KeyRound, ShieldCheck, Clock, Copy, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { useReveal } from "@/hooks/use-reveal";
import { toast } from "sonner";

const WORKER = "https://keygen-worker.cerise-pagel.workers.dev";
const TOKEN = "RPNGEN123";
const STEP_URL = "https://link-target.net/566237/XHDKuge8LL8K";

const steps = [
  { n: 1, title: "Complete Verification", body: "Click both step buttons to complete the Linkvertise verification flow." },
  { n: 2, title: "Receive Your Key", body: "Once both steps are done, your unique key appears below — valid for 24 hours." },
  { n: 3, title: "Load & Play", body: "Paste the key into your RPN Mods loader and drop into your next match." },
];

const KeySystem = () => {
  const ref = useReveal<HTMLDivElement>();
  const [keyValue, setKeyValue] = useState<string>("Fetching key…");
  const [timeLeft, setTimeLeft] = useState<string>("Fetching expiry…");
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    (async () => {
      try {
        const res = await fetch(`${WORKER}/gen?token=${TOKEN}`, {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setKeyValue(data.key || "—");
        setHasKey(Boolean(data.key));

        if (data.expiresAt) {
          interval = setInterval(() => {
            const diff = data.expiresAt - Date.now();
            if (diff <= 0) {
              setTimeLeft("Expired");
              clearInterval(interval);
            } else {
              const h = Math.floor(diff / 1000 / 3600);
              const m = Math.floor((diff / 1000 % 3600) / 60);
              const s = Math.floor(diff / 1000 % 60);
              setTimeLeft(`${h}h ${m}m ${s}s`);
            }
          }, 1000);
        } else {
          setTimeLeft("—");
        }
      } catch (err) {
        console.error(err);
        setKeyValue("Please complete Step 1 + Step 2");
        setTimeLeft("");
        setHasKey(false);
      }
    })();
    return () => { if (interval) clearInterval(interval); };
  }, []);

  const startStep = (step: 1 | 2) => {
    fetch(`${WORKER}/step${step}?token=${TOKEN}`).catch(() => {});
    window.location.href = STEP_URL;
  };

  const copyKey = async () => {
    if (!hasKey) return;
    try {
      await navigator.clipboard.writeText(keyValue);
      toast.success("Key copied to clipboard");
    } catch {
      toast.error("Couldn't copy. Select and copy manually.");
    }
  };

  return (
    <Layout>
      <div ref={ref} className="container max-w-4xl">
        {/* Header */}
        <section className="text-center py-10 md:py-14">
          <div className="reveal inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow mb-6">
            <KeyRound className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="reveal text-5xl md:text-6xl font-display font-bold tracking-tight">
            Key <span className="text-gradient-brand">System</span>
          </h1>
          <p className="reveal mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Two quick steps stand between you and your loader access.
          </p>
        </section>

        {/* Steps */}
        <section className="reveal glass rounded-2xl p-7 md:p-10 shadow-card mb-6">
          <div className="flex items-center gap-3 mb-7">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-semibold">How it works</h2>
          </div>
          <ol className="space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold flex items-center justify-center shadow-glow">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Verification buttons */}
        <section className="reveal grid sm:grid-cols-2 gap-4 mb-6">
          <Button variant="hero" size="xl" onClick={() => startStep(1)}>
            Start Step 1 <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="hero" size="xl" onClick={() => startStep(2)}>
            Start Step 2 <ArrowRight className="w-4 h-4" />
          </Button>
        </section>

        {/* Key card */}
        <section className="reveal glass rounded-2xl p-7 md:p-10 shadow-elevated">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div>
              <h2 className="font-display text-xl font-semibold">Your access key</h2>
              <p className="text-xs text-muted-foreground mt-1">Reload the page if your key doesn't appear after verification.</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {timeLeft || "—"}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-px bg-gradient-primary opacity-30 rounded-xl blur-md group-hover:opacity-60 transition-opacity" />
            <div className="relative rounded-xl bg-background/80 border border-border px-5 py-5 flex items-center justify-between gap-4">
              <code className="font-mono text-sm md:text-base text-foreground break-all">
                {keyValue}
              </code>
              <Button
                variant="glass"
                size="sm"
                onClick={copyKey}
                disabled={!hasKey}
                className="flex-shrink-0"
              >
                {hasKey ? <><Copy className="w-3.5 h-3.5" /> Copy</> : <><CheckCircle2 className="w-3.5 h-3.5" /> Pending</>}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default KeySystem;
