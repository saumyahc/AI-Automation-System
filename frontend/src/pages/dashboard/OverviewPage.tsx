import { Activity, Clock3, Rocket, TrendingUp, Zap } from 'lucide-react'
import StatCard from '../../components/ui/StatCard'
import StatusBadge from '../../components/ui/StatusBadge'
import PageTransition from '../../components/animations/PageTransition'

const stats = [
  { label: 'Total Workflows', value: '142', trend: '+12% MoM', icon: <Rocket size={18} /> },
  { label: 'Active Workflows', value: '68', trend: '+6% WoW', icon: <Zap size={18} /> },
  { label: 'Executions (7d)', value: '12,430', trend: '+18%', icon: <Activity size={18} /> },
  { label: 'Success Rate', value: '97.2%', helper: 'last 24h', icon: <TrendingUp size={18} /> },
]

const recent = [
  { name: 'GitHub Trends → Email', status: 'success', time: '2m ago' },
  { name: 'Invoice OCR → Drive', status: 'success', time: '12m ago' },
  { name: 'PagerDuty Alert Fanout', status: 'danger', time: '25m ago' },
  { name: 'Weekly Report Synth', status: 'success', time: '1h ago' },
]

const active = [
  { name: 'Daily GitHub Trending', trigger: 'Cron • 09:00 UTC', next: 'in 16h' },
  { name: 'Invoice Attachment Sync', trigger: 'Email • finance@', next: 'listening' },
  { name: 'Alerts to Telegram', trigger: 'Webhook • incident', next: 'idle' },
]

export default function OverviewPage() {
  return (
    <PageTransition>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animated-grid absolute inset-0 opacity-40" />
        <div className="bg-orbit absolute -right-20 top-10 h-72 w-72 rounded-full opacity-20 blur-3xl" />
      </div>
      <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-slate-400">Overview</p>
        <h2 className="text-2xl font-bold">Control center</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} trend={s.trend} helper={s.helper} icon={s.icon} />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="glass rounded-3xl p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Recent activity</p>
            <button className="text-sm text-primary">View all</button>
          </div>
          <div className="space-y-2">
            {recent.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-3 text-sm ring-1 ring-white/5"
              >
                <div>
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-slate-500">{item.time}</p>
                </div>
                <StatusBadge
                  status={item.status === 'success' ? 'success' : 'danger'}
                  label={item.status === 'success' ? 'Success' : 'Failed'}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Active workflows</p>
            <button className="text-sm text-primary">Manage</button>
          </div>
          <div className="space-y-2">
            {active.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-3 text-sm ring-1 ring-white/5"
              >
                <div>
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-slate-500">{item.trigger}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock3 size={14} /> {item.next}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </PageTransition>
  )
}

