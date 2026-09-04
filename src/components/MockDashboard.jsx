import { motion } from 'framer-motion'

// A stylised preview of the kind of admin dashboard Hirgaliye builds.
// Not a screenshot of any real client system — the numbers are sample data,
// and every string comes from translations so it renders in EN and SO.
// `compact` drops the sidebar + chart for the tight hero slot.

const barHeights = [42, 58, 35, 72, 50, 88, 64]

export default function MockDashboard({ project, compact = false, statusLabel }) {
  return (
    <div className="rounded-2xl border border-line bg-panel overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-line bg-inkalt">
        <span className="w-2.5 h-2.5 rounded-full bg-line" />
        <span className="w-2.5 h-2.5 rounded-full bg-line" />
        <span className="w-2.5 h-2.5 rounded-full bg-line" />
        <span className="ml-3 font-mono text-[10px] tracking-[0.15em] text-muted truncate">
          {project.tag}
        </span>
      </div>

      <div className={compact ? 'flex' : 'flex min-h-[300px]'}>
        {/* sidebar */}
        {!compact && (
          <div className="hidden sm:flex flex-col gap-1 w-40 shrink-0 border-r border-line p-3">
            {project.modules.map((m, i) => (
              <span
                key={m}
                className={`font-mono text-[11px] tracking-[0.05em] px-2.5 py-1.5 rounded-md ${
                  i === 0 ? 'bg-teal/10 text-teal' : 'text-muted'
                }`}
              >
                {m}
              </span>
            ))}
          </div>
        )}

        {/* main */}
        <div className="flex-1 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <p className="font-display text-base sm:text-lg text-paper leading-tight">{project.name}</p>
              <p className="font-mono text-[10px] tracking-[0.1em] text-muted mt-1">{project.kicker}</p>
            </div>
            {statusLabel && (
              <span className="shrink-0 inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.15em] px-2 py-1 rounded-full border border-line text-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                {statusLabel.toUpperCase()}
              </span>
            )}
          </div>

          {/* stat tiles */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {project.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="rounded-lg border border-line bg-inkalt p-2 sm:p-3"
              >
                <p className="font-mono text-[8px] sm:text-[9px] tracking-[0.1em] text-muted leading-tight">
                  {s.label.toUpperCase()}
                </p>
                <p
                  className={`font-display text-paper mt-1.5 leading-none whitespace-nowrap ${
                    compact ? 'text-[11px] sm:text-sm' : 'text-[13px] sm:text-base'
                  }`}
                >
                  {s.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* mini chart */}
          {!compact && (
            <div className="mt-5 rounded-lg border border-line bg-inkalt p-4">
              <div className="flex items-end gap-2 h-24">
                {barHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: 'easeOut' }}
                    className={`flex-1 rounded-t ${i === 5 ? 'bg-teal' : 'bg-line'}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* module chips for compact mode */}
          {compact && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.modules.slice(0, 5).map((m) => (
                <span
                  key={m}
                  className="font-mono text-[9px] tracking-[0.05em] px-2 py-1 rounded-md border border-line text-muted"
                >
                  {m}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
