import QuoteCalculator from "../components/QuoteCalculator";

const capabilities = [
  {
    title: "Rooftop & ground-mount design",
    description:
      "Optimal tilt, ballast modelling, and cable routing delivered as IFC-ready packages with structural calculations."
  },
  {
    title: "Intelligent monitoring",
    description:
      "Live performance dashboards, inverter diagnostics, and automated alerts to keep arrays producing at peak output."
  },
  {
    title: "Lifecycle partnership",
    description:
      "Planned maintenance, asset management, and PPA optimisation that grows value over the system's lifetime."
  }
];

const stats = [
  { label: "Projects delivered", value: "180+", detail: "Across commercial roofs, schools and logistics parks" },
  { label: "Uptime achieved", value: "99.3%", detail: "Proactive monitoring with 1 hour response" },
  { label: "Carbon avoided", value: "24kt", detail: "Tonnes CO₂ equivalent measured year-to-date" }
];

const process = [
  {
    title: "Discover",
    body: "Site intelligence, irradiance modelling, grid assessments and business case validation."
  },
  {
    title: "Engineer",
    body: "Detailed electrical + structural design, DNO liaison, procurement and project controls."
  },
  {
    title: "Deploy",
    body: "Accredited installation teams, zero-disruption commissioning and health & safety leadership."
  },
  {
    title: "Optimise",
    body: "Monitoring, reporting, maintenance and continuous improvement across your portfolio."
  }
];

const faqs = [
  {
    q: "How quickly can Codex Solar begin a project?",
    a: "Most feasibility studies are turned around inside two weeks. Planning, grid applications and procurement typically take 6-8 weeks depending on complexity."
  },
  {
    q: "Do you offer finance or power purchase agreements?",
    a: "Yes. We structure capex, lease and PPA models with partner funds so you can deploy with zero upfront spend when required."
  },
  {
    q: "Can you integrate battery storage and EV charging?",
    a: "Absolutely. Our engineers plan hybrid systems with storage, smart EV charging and on-site load controls as standard options."
  }
];

export default function HomePage() {
  return (
    <main className="pb-24">
      <section className="section pt-24">
        <div className="max-w-3xl">
          <span className="tag">Codex Solar</span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Solar infrastructure engineered for the energy transition.
          </h1>
          <p className="mt-6 text-lg text-slate-300/90 sm:text-xl">
            We design, build and optimise solar PV assets for ambitious property teams. From rooftop arrays to multi-site portfolios,
            Codex Solar combines data-driven engineering with delivery discipline.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a className="btn-primary" href="#discovery">Book a discovery call</a>
            <a className="btn-secondary" href="#capabilities">View capabilities</a>
          </div>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="card-glass grid gap-2">
              <span className="text-sm uppercase tracking-wide text-emerald-300/80">{item.label}</span>
              <span className="text-3xl font-semibold text-white">{item.value}</span>
              <p className="text-sm text-slate-300/80">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">Trusted by</p>
          <div className="grid gap-4 text-slate-400 sm:grid-cols-3">
            <span>Municipal climate programmes</span>
            <span>FTSE 250 real estate trusts</span>
            <span>Industrial and logistics operators</span>
          </div>
        </div>
      </section>

      <section id="discovery" className="section mt-24">
        <div className="section-narrow text-center">
          <h2 className="section-heading">Model your project in minutes</h2>
          <p className="section-subtitle">
            Use indicative figures to explore scale and commercial return. We refine with LiDAR surveys and production simulations
            before you commit to build.
          </p>
        </div>
        <div className="mt-12">
          <QuoteCalculator />
        </div>
      </section>

      <section id="capabilities" className="section mt-24">
        <div className="tablet-split items-start gap-12">
          <div>
            <h2 className="section-heading">Full-stack delivery from blueprint to performance</h2>
            <p className="section-subtitle">
              Our engineers, project managers and monitoring analysts partner with your estates team to deliver resilient solar
              infrastructure.
            </p>
            <ul className="mt-8 space-y-5 text-sm text-slate-300/90">
              <li className="flex gap-3">
                <span className="mt-0.5 text-emerald-300">◆</span>
                <span>Grid export, DNO liaison and G99 compliance handled in-house.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-emerald-300">◆</span>
                <span>Digital twin modelling with PVSyst + BIM workflows for transparent handover.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-emerald-300">◆</span>
                <span>Dedicated commissioning managers, CDM leadership and audited health & safety.</span>
              </li>
            </ul>
          </div>
          <div className="grid gap-5">
            {capabilities.map((capability) => (
              <div key={capability.title} className="card-glass bg-black/30">
                <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mt-24">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/10 via-slate-900/40 to-slate-950 p-10 shadow-2xl">
          <div className="grid gap-2">
            <span className="tag">Case snapshot</span>
            <h2 className="section-heading">2.4 MW for an urban logistics hub</h2>
            <p className="section-subtitle">
              Codex Solar designed a split-level array over three distribution centres with adaptive ballast systems and real-time
              fault diagnostics.
            </p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            <div className="card-glass bg-black/40">
              <dt className="text-xs uppercase tracking-wide text-emerald-300/80">Annual output</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">2.3 GWh</dd>
              <p className="mt-1 text-xs text-slate-300/80">Net-zero logistics milestone achieved twelve months ahead of plan.</p>
            </div>
            <div className="card-glass bg-black/40">
              <dt className="text-xs uppercase tracking-wide text-emerald-300/80">On-site consumption</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">84%</dd>
              <p className="mt-1 text-xs text-slate-300/80">Load balancing via predictive analytics keeps exports minimal.</p>
            </div>
            <div className="card-glass bg-black/40">
              <dt className="text-xs uppercase tracking-wide text-emerald-300/80">Payback</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">4.7 years</dd>
              <p className="mt-1 text-xs text-slate-300/80">PPA structure underwritten by the landlord to share upside.</p>
            </div>
          </dl>
        </div>
      </section>

      <section className="section mt-24">
        <div className="section-narrow text-center">
          <h2 className="section-heading">Delivery cadence you can depend on</h2>
          <p className="section-subtitle">
            We combine ISO-accredited project management with embedded client teams to get you from feasibility to energisation
            with clarity.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <div key={step.title} className="card-glass bg-black/40">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section mt-24">
        <div className="section-narrow text-center">
          <h2 className="section-heading">Frequently asked questions</h2>
          <p className="section-subtitle">Straight answers from our engineers and finance partners.</p>
        </div>
        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-3xl border border-white/10 bg-white/5 p-6">
              <summary className="flex cursor-pointer items-center justify-between gap-6 text-left text-lg font-semibold text-white">
                <span>{faq.q}</span>
                <span className="text-sm text-emerald-300 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm text-slate-300/90">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section mt-24">
        <div className="tablet-split items-center gap-10 rounded-3xl border border-emerald-300/40 bg-emerald-400/10 p-10">
          <div>
            <h2 className="section-heading">Ready to scope Codex Solar for your estate?</h2>
            <p className="section-subtitle">
              Leave a note with your objectives and we&apos;ll assemble the right engineering team for a deep-dive workshop.
            </p>
          </div>
          <form className="grid gap-4 text-sm text-slate-900">
            <input type="text" placeholder="Name" className="bg-white/90 text-slate-900" />
            <input type="email" placeholder="Work email" className="bg-white/90 text-slate-900" />
            <textarea
              placeholder="Tell us about your buildings, timelines and energy goals."
              rows={4}
              className="w-full rounded-2xl border border-white/30 bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/60"
            />
            <button type="submit" className="btn-primary">
              Send briefing
            </button>
          </form>
        </div>
      </section>

      <footer className="section mt-24 border-t border-white/10 pt-12 text-sm text-slate-400">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Codex Solar Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#capabilities" className="hover:text-emerald-300">
              Capabilities
            </a>
            <a href="#discovery" className="hover:text-emerald-300">
              Discovery
            </a>
            <a href="mailto:projects@codex.solar" className="hover:text-emerald-300">
              projects@codex.solar
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
