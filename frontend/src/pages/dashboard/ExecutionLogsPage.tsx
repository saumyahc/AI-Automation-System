import { Filter, CalendarRange, Search, Bug, CheckCircle2, RefreshCw } from 'lucide-react'
import StatusBadge from '../../components/ui/StatusBadge'
import PageTransition from '../../components/animations/PageTransition'

const logs = [
  { name: 'GitHub Trends → Email', status: 'success', time: '2025-12-23 10:21', duration: '820ms' },
  { name: 'Invoice OCR → Drive', status: 'success', time: '2025-12-23 10:05', duration: '1.2s' },
  { name: 'PagerDuty Alert Fanout', status: 'danger', time: '2025-12-23 09:58', duration: '640ms' },
  { name: 'Weekly Report Synth', status: 'success', time: '2025-12-23 09:30', duration: '2.1s' },
]

export default function ExecutionLogsPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Logs</p>
          <h2 className="text-2xl font-bold">Execution history</h2>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10">
          <RefreshCw size={16} /> Refresh
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-white/5 p-3 card-border">
        <button className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10">
          <CalendarRange size={16} /> Last 24h
        </button>
        <button className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10">
          <Filter size={16} /> Status: All
        </button>
        <div className="relative flex-1 min-w-[220px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            placeholder="Search logs..."
            className="w-full rounded-xl bg-slate-900/60 py-2 pl-9 pr-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-slate-500"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white/5 card-border">
        <div className="grid grid-cols-12 border-b border-white/5 px-4 py-3 text-xs uppercase tracking-wide text-slate-400">
          <div className="col-span-4">Workflow</div>
          <div className="col-span-3">Time</div>
          <div className="col-span-2">Duration</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>
        {logs.map((log) => (
          <div key={log.time + log.name} className="grid grid-cols-12 items-center px-4 py-3 text-sm text-white odd:bg-white/[0.02]">
            <div className="col-span-4 font-semibold text-white">{log.name}</div>
            <div className="col-span-3 text-slate-400">{log.time}</div>
            <div className="col-span-2 text-slate-400">{log.duration}</div>
            <div className="col-span-2">
              <StatusBadge status={log.status === 'success' ? 'success' : 'danger'} label={log.status === 'success' ? 'Success' : 'Failed'} />
            </div>
            <div className="col-span-1 flex items-center justify-end gap-2">
              <button className="rounded-lg bg-white/5 p-1.5 ring-1 ring-white/10">
                {log.status === 'success' ? <CheckCircle2 size={16} /> : <Bug size={16} className="text-red-400" />}
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </PageTransition>
  )
}

