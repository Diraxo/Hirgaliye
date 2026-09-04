import { motion } from 'framer-motion'
import MockDashboard from './MockDashboard'
import { useLanguage } from '../i18n/LanguageContext'

// The hero's right-hand visual: two stacked dashboard previews so the first
// thing a visitor sees is an actual system, not an abstract diagram.

export default function HeroPreview() {
  const { t } = useLanguage()
  const s = t.showcase
  const [front, behind] = s.projects

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
      {/* back card */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="absolute -top-6 -right-4 w-[85%] hidden sm:block"
      >
        <div className="opacity-60 blur-[1px]">
          <MockDashboard project={behind} compact statusLabel={s.statusLabels[behind.status]} />
        </div>
      </motion.div>

      {/* front card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative"
      >
        <MockDashboard project={front} compact statusLabel={s.statusLabels[front.status]} />
      </motion.div>
    </div>
  )
}
