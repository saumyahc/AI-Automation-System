import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Mail, LockKeyhole } from 'lucide-react'

export default function SignUpPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-10 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/65 to-slate-950/80" />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-6 rounded-3xl bg-slate-950/70 p-8 ring-1 ring-white/10 backdrop-blur-xl shadow-2xl shadow-slate-900/60"
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-400">Create account</p>
          <h1 className="text-2xl font-bold">Join NovaOps</h1>
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <User size={18} className="text-slate-400" />
            <input className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" placeholder="Full name" />
          </label>
          <label className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <Mail size={18} className="text-slate-400" />
            <input className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" placeholder="you@email.com" />
          </label>
          <label className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <LockKeyhole size={18} className="text-slate-400" />
            <input
              type="password"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="Create password"
            />
          </label>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <input type="checkbox" className="rounded border-slate-600 bg-slate-900" />
            I agree to the terms and privacy policy
          </div>
          <button className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-1px]">
            Create account
          </button>
        </div>

        <p className="text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

