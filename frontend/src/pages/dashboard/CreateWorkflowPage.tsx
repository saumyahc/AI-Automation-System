import { motion } from 'framer-motion'
import { Wand2, CheckCircle2, Code2, PlayCircle } from 'lucide-react'
import PageTransition from '../../components/animations/PageTransition'

export default function CreateWorkflowPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Create</p>
            <h2 className="text-2xl font-bold">Natural language builder</h2>
          </div>
          <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-glow">
            Save & Activate
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-4 lg:col-span-2"
          >
            <div className="mb-3 flex items-center gap-2 text-primary">
              <Wand2 size={18} />
              <p className="text-sm font-semibold text-white">Describe your workflow</p>
            </div>
            <textarea
              rows={5}
              className="w-full rounded-2xl bg-slate-900/60 p-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-slate-500"
              placeholder="Example: Every day at 9 AM, send me GitHub trending repos via email and Telegram..."
            />
            <button className="mt-3 w-full rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/15">
              Generate Workflow
            </button>
          </motion.div>

          <div className="glass space-y-3 rounded-3xl p-4">
            <p className="text-sm font-semibold text-white">Tips & Examples</p>
            {[
              '“When I receive invoice emails, save attachments to Drive.”',
              '“If uptime check fails, alert Telegram + email on-call.”',
              '“Weekly summary of Jira tickets to Slack.”',
            ].map((tip) => (
              <div key={tip} className="rounded-2xl bg-white/5 p-3 text-sm text-slate-300 ring-1 ring-white/5">
                {tip}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="glass rounded-3xl p-4">
            <div className="mb-2 flex items-center gap-2 text-primary">
              <CheckCircle2 size={18} />
              <p className="text-sm font-semibold text-white">Generated workflow</p>
            </div>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/5">
                Name: GitHub Trends Daily
              </div>
              <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/5">
                Trigger: Cron • 09:00 UTC
              </div>
              <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/5">
                Actions: Fetch trending → format summary → send email + Telegram
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-4">
            <div className="mb-2 flex items-center gap-2 text-primary">
              <Code2 size={18} />
              <p className="text-sm font-semibold text-white">Code preview</p>
            </div>
            <div className="rounded-2xl bg-slate-950 p-3 text-xs text-emerald-100 ring-1 ring-white/5">
              <pre className="whitespace-pre-wrap leading-6">
{`def run():
  data = fetch_trending(language="typescript")
  summary = format_markdown(data)
  send_email(to="me@example.com", subject="Daily trends", body=summary)
  send_telegram(chat_id=123, text=summary)`}
              </pre>
            </div>
            <button className="mt-3 flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10">
              <PlayCircle size={16} /> Test Run
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

