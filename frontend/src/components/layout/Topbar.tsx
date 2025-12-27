import { Menu, Search, Bell, Plus } from 'lucide-react'

type Props = {
  onToggleSidebar: () => void
}

export default function Topbar({ onToggleSidebar }: Props) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-4 py-3 card-border backdrop-blur">
      <div className="flex items-center gap-2">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white shadow-sm ring-1 ring-white/5 lg:hidden"
          onClick={onToggleSidebar}
        >
          <Menu size={18} />
        </button>
        <div className="relative hidden sm:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            placeholder="Search workflows, logs..."
            className="w-72 rounded-xl bg-white/5 py-2 pl-9 pr-3 text-sm text-white outline-none ring-1 ring-white/5 placeholder:text-slate-500 focus:ring-primary/50"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/5">
          <Bell size={18} />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary" />
        </button>
        <button className="hidden items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-glow transition hover:translate-y-[-1px] sm:flex">
          <Plus size={16} />
          Create Workflow
        </button>
        <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/5">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-cyan-400" />
          <div>
            <p className="text-xs text-slate-400">Operator</p>
            <p className="text-sm font-semibold">Ava Quinn</p>
          </div>
        </div>
      </div>
    </div>
  )
}

