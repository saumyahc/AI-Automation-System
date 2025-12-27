import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, LockKeyhole, Github, Chrome } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-10 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/65 to-slate-950/80" />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-6 rounded-3xl bg-slate-950/70 p-8 ring-1 ring-white/10 backdrop-blur-xl shadow-2xl shadow-slate-900/60"
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-400">Welcome back</p>
          <h1 className="text-2xl font-bold">Login to NovaOps</h1>
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <Mail size={18} className="text-slate-400" />
            <input className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" placeholder="you@email.com" />
          </label>
          <label className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <LockKeyhole size={18} className="text-slate-400" />
            <input
              type="password"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="••••••••"
            />
          </label>
          <div className="flex items-center justify-between text-sm text-slate-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-slate-600 bg-slate-900" /> Remember me
            </label>
            <Link to="/forgot-password" className="text-primary">
              Forgot password?
            </Link>
          </div>
          <button className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-1px]">
            Login
          </button>
          <div className="flex gap-3">
            <button className="flex w-1/2 items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10">
              <Chrome size={16} /> Google
            </button>
            <button className="flex w-1/2 items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10">
              <Github size={16} /> GitHub
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-400">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-primary">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

