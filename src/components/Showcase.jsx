import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import MockDashboard from './MockDashboard'
import { whatsappLink } from '../siteConfig'
import { useLanguage } from '../i18n/LanguageContext'

export default function Showcase() {
  const { t } = useLanguage()
  const s = t.showcase
  const [activeId, setActiveId] = useState(s.projects[0].id)

  // keep selection stable across a language switch
  useEffect(() => {
    if (!s.projects.find((p) => p.id === activeId)) setActiveId(s.projects[0].id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t])

  const active = s.projects.find((p) => p.id === activeId) ?? s.projects[0]

  return (
    <section id="work" className="relative py-24 md:py-32 border-t border-line bg-inkalt">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-violet mb-3">{s.eyebrow.toUpperCase()}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper max-w-xl leading-snug">
              {s.title}
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-relaxed">{s.subtitle}</p>
        </div>

        {/* tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {s.projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`shrink-0 text-left px-4 py-3 rounded-lg border transition-colors focus-ring ${
                activeId === p.id
                  ? 'border-teal/50 bg-panel text-paper'
                  : 'border-line text-muted hover:text-paper'
              }`}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] block mb-1 text-teal">{p.tag}</span>
              <span className="text-sm font-medium">{p.name}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start"
          >
            {/* left: what it covers */}
            <div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] px-2.5 py-1 rounded-full border border-line text-teal mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                {s.statusLabels[active.status].toUpperCase()}
              </span>
              <h3 className="font-display text-2xl text-paper mb-2">{active.name}</h3>
              <p className="text-muted mb-6 leading-relaxed">{active.kicker}</p>
              <div className="grid gap-2.5">
                {active.modules.map((m, i) => (
                  <motion.div
                    key={m}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <Check size={15} className="text-teal shrink-0" />
                    <span className="text-sm text-paper/90">{m}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* right: dashboard preview */}
            <MockDashboard project={active} statusLabel={s.statusLabels[active.status]} />
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-[0.15em] text-muted">{s.note.toUpperCase()}</span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-teal text-ink font-medium px-5 py-2.5 rounded-full hover:bg-paper transition-colors focus-ring"
          >
            {s.cta}
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
