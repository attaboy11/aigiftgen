"use client";

import { useMemo, useState } from "react";

const SUN_ZONES = [
  { label: "Scotland / North UK", value: 2.7 },
  { label: "Midlands", value: 3.2 },
  { label: "South England", value: 3.8 },
  { label: "Coastal South", value: 4.1 }
];

const PERFORMANCE_RATIO = 0.82;
const COST_PER_KW = 1150; // GBP per kW installed
const GRID_RATE = 0.28; // GBP per kWh
const PANEL_DENSITY = 0.19; // kW per m^2 of roof

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0
  }).format(value);
}

export default function QuoteCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(140);
  const [zone, setZone] = useState(SUN_ZONES[2].value);
  const [roofArea, setRoofArea] = useState(48);

  const results = useMemo(() => {
    const bill = Math.max(monthlyBill, 0);
    const sunHours = Number(zone) || SUN_ZONES[0].value;
    const area = Math.max(roofArea, 0);

    const monthlyUsageKwh = bill / GRID_RATE;
    const annualUsageKwh = monthlyUsageKwh * 12;

    const maxSystemKw = area * PANEL_DENSITY;
    const requiredKw = annualUsageKwh / (sunHours * 365 * PERFORMANCE_RATIO);
    const systemKw = Math.min(Math.max(requiredKw, 0), Math.max(maxSystemKw, 0));

    const annualGeneration = systemKw * sunHours * 365 * PERFORMANCE_RATIO;
    const utilisedGeneration = Math.min(annualGeneration, annualUsageKwh);
    const exportGeneration = Math.max(annualGeneration - utilisedGeneration, 0);

    const annualSavings = utilisedGeneration * GRID_RATE;
    const smartExportRate = 0.15;
    const exportIncome = exportGeneration * smartExportRate;
    const totalAnnualBenefit = annualSavings + exportIncome;
    const systemCost = systemKw * COST_PER_KW;
    const paybackYears = totalAnnualBenefit > 0 ? systemCost / totalAnnualBenefit : Infinity;

    return {
      systemKw,
      annualGeneration,
      annualSavings,
      exportIncome,
      totalAnnualBenefit,
      systemCost,
      paybackYears
    };
  }, [monthlyBill, zone, roofArea]);

  return (
    <div className="card-glass grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <h3 className="text-2xl font-semibold text-white">Project discovery</h3>
        <p className="mt-2 text-sm text-slate-300/90">
          Start with assumptions that reflect your site. The calculator blends irradiance data with
          consumption heuristics so our engineers can validate the specification in the next call.
        </p>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <dt className="text-xs uppercase tracking-wide text-emerald-300/80">Recommended system size</dt>
            <dd className="mt-2 text-2xl font-semibold text-white">
              {results.systemKw ? results.systemKw.toFixed(1) : "0.0"} kW
            </dd>
            <p className="mt-1 text-xs text-slate-400">
              Based on roof capacity and your annual consumption profile.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <dt className="text-xs uppercase tracking-wide text-emerald-300/80">Year 1 benefit</dt>
            <dd className="mt-2 text-2xl font-semibold text-white">
              {formatCurrency(results.totalAnnualBenefit)}
            </dd>
            <p className="mt-1 text-xs text-slate-400">
              {formatCurrency(results.annualSavings)} saved on bills + {formatCurrency(results.exportIncome)} export revenue.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <dt className="text-xs uppercase tracking-wide text-emerald-300/80">Capex budget</dt>
            <dd className="mt-2 text-2xl font-semibold text-white">
              {formatCurrency(results.systemCost)}
            </dd>
            <p className="mt-1 text-xs text-slate-400">Inclusive of engineering, monitoring and DNO liaison.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <dt className="text-xs uppercase tracking-wide text-emerald-300/80">Payback horizon</dt>
            <dd className="mt-2 text-2xl font-semibold text-white">
              {results.paybackYears === Infinity ? "—" : `${results.paybackYears.toFixed(1)} years`}
            </dd>
            <p className="mt-1 text-xs text-slate-400">Model assumes Smart Export Guarantee at £0.15/kWh.</p>
          </div>
        </dl>
      </div>

      <form className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="bill">Average electricity bill</label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">£</span>
            <input
              id="bill"
              type="number"
              min={0}
              className="pl-8"
              value={monthlyBill}
              onChange={(event) => setMonthlyBill(Number(event.target.value))}
            />
          </div>
          <p className="text-xs text-slate-400">
            Used to approximate annual consumption at {GRID_RATE.toFixed(2)} £/kWh.
          </p>
        </div>

        <div className="grid gap-2">
          <label htmlFor="zone">Solar zone</label>
          <select
            id="zone"
            value={zone}
            onChange={(event) => setZone(Number(event.target.value))}
          >
            {SUN_ZONES.map((zoneOption) => (
              <option key={zoneOption.label} value={zoneOption.value}>
                {zoneOption.label} · {zoneOption.value.toFixed(1)} kWh/m²/day
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="roof">Usable roof area</label>
          <div className="relative">
            <input
              id="roof"
              type="number"
              min={0}
              value={roofArea}
              onChange={(event) => setRoofArea(Number(event.target.value))}
            />
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">m²</span>
          </div>
          <p className="text-xs text-slate-400">
            Accounts for setbacks, skylights and shading. Typical terrace homes deploy 30–40 m².
          </p>
        </div>

        <div className="grid gap-3 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-sm text-emerald-100">
          <span className="font-semibold text-emerald-200">Next step:</span>
          <p>
            Share the numbers with our engineers and receive a feasibility pack with bespoke irradiance modelling within 48
            hours.
          </p>
        </div>
      </form>
    </div>
  );
}
