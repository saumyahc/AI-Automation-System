import { Download, BarChart3, Activity, PieChart, Timer } from 'lucide-react'
import StatCard from '../../components/ui/StatCard'
import PageTransition from '../../components/animations/PageTransition'

const performance = [
  { name: 'GitHub Trends', executions: 420, success: 0.98 },
  { name: 'Invoice OCR', executions: 260, success: 0.94 },
  { name: 'Alerts Fanout', executions: 180, success: 0.9 },
]

export default function AnalyticsPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Analytics</p>
          <h2 className="text-2xl font-bold">Performance overview</h2>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10">
          <Download size={16} /> Export CSV
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Executions (24h)" value="2,130" helper="trend +12%" icon={<Activity size={18} />} />
        <StatCard label="Success Rate" value="97.8%" helper="steady" icon={<BarChart3 size={18} />} />
        <StatCard label="Avg Duration" value="1.2s" helper="p95 2.3s" icon={<Timer size={18} />} />
        <StatCard label="Active Integrations" value="5" helper="of 7" icon={<PieChart size={18} />} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="glass rounded-3xl p-4">
          <p className="mb-4 text-sm font-semibold text-white">Workflow performance</p>
          <div className="space-y-3">
            {performance.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between text-sm text-white">
                  <p>{item.name}</p>
                  <p className="text-slate-400">{item.executions} exec</p>
                </div>
                <div className="mt-1 h-2 rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${Math.min(100, item.success * 100)}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500">Success {Math.round(item.success * 100)}%</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-4">
          <p className="mb-4 text-sm font-semibold text-white">Integration usage</p>
          <div className="space-y-3 text-sm text-slate-300">
            {[
              { label: 'Email', value: 40 },
              { label: 'Telegram', value: 30 },
              { label: 'WhatsApp', value: 18 },
              { label: 'Drive', value: 12 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <p>{item.label}</p>
                  <p className="text-slate-500">{item.value}%</p>
                </div>
                <div className="mt-1 h-2 rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400" style={{ width: `${item.value}%` }} />
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

