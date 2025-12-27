import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Play, Sparkles, Workflow, BarChart3, Zap, ShieldCheck } from 'lucide-react'
import FadeIn from '../components/animations/FadeIn'
import HeroScene from '../components/hero/HeroScene'

const features = [
  { title: 'AI-Powered Automation', icon: <Sparkles size={18} />, desc: 'Describe tasks in plain language and generate workflows instantly.' },
  { title: 'Multi-Channel Delivery', icon: <Workflow size={18} />, desc: 'Email, Telegram, WhatsApp and webhooks ready out-of-the-box.' },
  { title: 'Observability', icon: <BarChart3 size={18} />, desc: 'Analytics, execution timelines and health indicators in one place.' },
  { title: 'Secure by Default', icon: <ShieldCheck size={18} />, desc: 'Granular permissions, API keys, and secret storage baked in.' },
]

export default function LandingPage() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotX = useSpring(useTransform(y, [-200, 200], [6, -6]), { stiffness: 120, damping: 12 })
  const rotY = useSpring(useTransform(x, [-200, 200], [-6, 6]), { stiffness: 120, damping: 12 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window
    x.set(e.clientX - innerWidth / 2)
    y.set(e.clientY - innerHeight / 2)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950/10 text-white" onMouseMove={handleMove}>
      <div className="pointer-events-none fixed inset-0 -z-5">
        <div className="animated-grid absolute inset-0 opacity-15" />
        <div className="bg-orbit absolute -left-16 top-32 h-80 w-80 rounded-full opacity-20 blur-3xl" />
        <div className="bg-orbit absolute -right-24 top-0 h-96 w-96 rounded-full opacity-16 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 space-y-5"
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm text-primary ring-1 ring-primary/30"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Sparkles size={16} /> AI Automation Studio
            </motion.div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-primary/20 via-emerald-400/15 to-purple-500/15 blur-3xl" />
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Automate anything with <span className="text-primary">natural language</span> prompts.
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-300">
                Build, preview, and deploy workflows that listen to your inbox, cron jobs, and chat channels—fully animated,
                3D-infused, and production ready.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/signup"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-emerald-400 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-1px]"
              >
                Get Started
              </Link>
              <Link
                to="/app/overview"
                className="flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/15"
              >
                <Play size={16} /> View Demo
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((f, i) => (
                <FadeIn key={f.title} delay={0.1 + i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="glass glass-gradient rounded-2xl p-4"
                  >
                    <div className="mb-2 flex items-center gap-2 text-primary">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/25">
                        {f.icon}
                      </div>
                      <span className="text-sm font-semibold text-white">{f.title}</span>
                    </div>
                    <p className="text-sm text-slate-400">{f.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
            className="relative flex-1"
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-emerald-300/10 blur-2xl" />
            <HeroScene className="rounded-3xl shadow-2xl shadow-sky-500/10 ring-1 ring-white/10" />
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 rounded-3xl bg-white/[0.04] p-6 card-border sm:grid-cols-2 md:grid-cols-3">
          {['Describe workflows', 'Validate code', 'Test & activate'].map((item, i) => (
            <FadeIn key={item} delay={0.1 + i * 0.06}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/5"
              >
                <p className="text-sm font-semibold">{item}</p>
                <p className="mt-2 text-sm text-slate-400">
                  Guided steps with live previews, versioned saves, and AI assistance on tap.
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[{ icon: <Zap size={18} />, title: 'Workflow templates' }, { icon: <BarChart3 size={18} />, title: 'Analytics built-in' }].map(
            (card, i) => (
              <FadeIn key={card.title} delay={0.1 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="glass rounded-3xl p-6"
                >
                  <div className="flex items-center gap-2 text-primary">
                    {card.icon}
                    <p className="text-sm font-semibold text-white">{card.title}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">
                    {card.title === 'Workflow templates'
                      ? 'Start from curated recipes: GitHub trending reports, multi-channel alerts, and invoice processing.'
                      : 'Monitor success rate, execution time, and integration health across channels in real time.'}
                  </p>
                </motion.div>
              </FadeIn>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

