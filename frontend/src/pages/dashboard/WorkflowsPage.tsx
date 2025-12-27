import { Plus, Filter, List, Grid2X2, Search, Settings, PlayCircle, Edit3, Trash2 } from 'lucide-react'
import StatusBadge from '../../components/ui/StatusBadge'
import PageTransition from '../../components/animations/PageTransition'

const workflows = [
  { name: 'GitHub Trends → Email', desc: 'Daily digest of trending repos', trigger: 'Cron', last: '2m ago', executions: 248, success: '99%' },
  { name: 'Invoice OCR → Drive', desc: 'Extract PDF attachments', trigger: 'Email', last: '12m ago', executions: 120, success: '96%' },
  { name: 'PagerDuty Alerts Fanout', desc: 'Forward alerts to Telegram', trigger: 'Webhook', last: '25m ago', executions: 80, success: '91%' },
]

export default function WorkflowsPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-slate-400">Workflows</p>
          <h2 className="text-2xl font-bold">Manage automations</h2>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-1px]">
          <Plus size={16} /> Create Workflow
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-white/5 p-3 card-border">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            placeholder="Search workflows..."
            className="w-full rounded-xl bg-slate-900/60 py-2 pl-9 pr-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-slate-500"
          />
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10">
          <Filter size={16} /> Filter
        </button>
        <button className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10">
          <List size={16} /> List
        </button>
        <button className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10">
          <Grid2X2 size={16} /> Grid
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white/5 card-border">
        <div className="grid grid-cols-12 border-b border-white/5 px-4 py-3 text-xs uppercase tracking-wide text-slate-400">
          <div className="col-span-3">Workflow</div>
          <div className="col-span-3">Description</div>
          <div className="col-span-2">Trigger</div>
          <div className="col-span-2">Last run</div>
          <div className="col-span-1">Exec</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>
        {workflows.map((w) => (
          <div key={w.name} className="grid grid-cols-12 items-center px-4 py-3 text-sm text-white odd:bg-white/[0.02]">
            <div className="col-span-3 font-semibold text-white">{w.name}</div>
            <div className="col-span-3 text-slate-400">{w.desc}</div>
            <div className="col-span-2">
              <StatusBadge status="neutral" label={w.trigger} />
            </div>
            <div className="col-span-2 text-slate-400">{w.last}</div>
            <div className="col-span-1 text-slate-400">{w.executions}</div>
            <div className="col-span-1 flex items-center justify-end gap-2 text-slate-400">
              <span className="text-emerald-400">{w.success}</span>
              <button className="rounded-lg bg-white/5 p-1.5 ring-1 ring-white/10">
                <PlayCircle size={16} />
              </button>
              <button className="rounded-lg bg-white/5 p-1.5 ring-1 ring-white/10">
                <Edit3 size={16} />
              </button>
              <button className="rounded-lg bg-white/5 p-1.5 ring-1 ring-white/10">
                <Settings size={16} />
              </button>
              <button className="rounded-lg bg-white/5 p-1.5 ring-1 ring-white/10">
                <Trash2 size={16} className="text-red-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </PageTransition>
  )
}

