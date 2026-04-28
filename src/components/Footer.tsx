import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => (
  <footer className="relative mt-32 border-t border-border/60">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="container py-14">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="" className="h-9 w-9 rounded-xl" />
            <span className="font-display font-bold text-lg">
              RPN <span className="text-gradient-brand">Mods</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Premium read-only DMA cheats for Black Ops 6 & 7. Built for
            performance, designed for safety, updated relentlessly.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Product</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/download" className="hover:text-foreground transition-colors">Download</Link></li>
            <li><Link to="/key-system" className="hover:text-foreground transition-colors">Get Key</Link></li>
            <li><Link to="/download-legacy" className="hover:text-foreground transition-colors">Legacy Loaders</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Community</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a
                href="https://discord.gg/3uSUPHugtQ"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Discord
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} RPN Mods. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/80">
          For educational use only.
        </p>
      </div>
    </div>
  </footer>
);
