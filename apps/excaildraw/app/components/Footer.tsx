import { PenTool, Github, Twitter, MessageCircle, Heart } from 'lucide-react';

const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Showcase', 'Use Cases', 'Pricing', 'Blog'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Tutorials', 'API Reference', 'Community', 'Templates'],
  },
  {
    title: 'Company',
    links: ['About', 'Open Source', 'Privacy', 'Terms', 'Contact'],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-paper-warm border-t border-ink/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-ink flex items-center justify-center">
                <PenTool className="w-5 h-5 text-paper" strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-xl tracking-tight">Excalidraw</span>
            </a>
            <p className="text-sm text-ink-light max-w-xs leading-relaxed">
              The virtual whiteboard for sketching hand-drawn diagrams.
              Open source and free forever.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Twitter, label: 'Twitter' },
                { icon: MessageCircle, label: 'Discord' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white border border-ink/8 flex items-center justify-center text-ink-light hover:text-ink hover:border-ink/20 hover:scale-110 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold text-ink mb-3">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-ink-light hover:text-ink transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-ink-soft">
            © 2026 Excalidraw. Open source under MIT License.
          </p>
          <p className="text-sm text-ink-soft flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-accent-coral fill-accent-coral" /> by the community
          </p>
        </div>
      </div>
    </footer>
  );
}

