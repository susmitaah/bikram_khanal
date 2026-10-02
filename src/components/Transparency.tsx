"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  categories,
  portalCopy as copy,
  projects,
  statuses,
  type Project,
  type ProjectCategory,
  type ProjectStatus,
} from "@/content/projects";
import { useLang, type L } from "@/i18n/useLang";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";

type Filter<T extends string> = T | "all";

export function Transparency() {
  const { t, num } = useLang();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Filter<ProjectCategory>>("all");
  const [status, setStatus] = useState<Filter<ProjectStatus>>("all");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (status !== "all" && p.status !== status) return false;
      if (!q) return true;
      const haystack = [p.name.np, p.name.en, p.location?.np, p.location?.en, p.contractor?.name.np, p.contractor?.name.en]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, category, status]);

  const totalBudget = rows.reduce((sum, p) => sum + (p.amount ?? 0), 0);
  const hasSamples = projects.some((p) => p.sample);

  const money = (amount?: number) =>
    amount
      ? `${t(copy.rsLabel)} ${num((amount / 100000).toLocaleString("en-IN", { maximumFractionDigits: 1 }))} ${t(copy.lakh)}`
      : "—";

  return (
    <section id="transparency" className="border-b border-rule bg-cream-deep py-16 sm:py-24">
      <Container>
        <SectionHeading title={t(copy.title)}>
          <p>{t(copy.intro)}</p>
          <p className="mt-5 border-l-2 border-maroon pl-4 font-display text-xl italic text-navy">
            “{t(copy.motto)}”
          </p>
        </SectionHeading>

        {hasSamples && (
          <p role="note" className="mt-8 inline-block rounded-md bg-gold/10 px-3 py-1.5 text-sm text-navy">
            {t(copy.sampleNotice)}
          </p>
        )}

        {/* controls */}
        <div className="mb-6 mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">{t(copy.search)}</span>
            <Search
              size={17}
              strokeWidth={1.5}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-mute"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t(copy.search)}
              className="w-full rounded-sm border border-rule bg-cream py-2.5 pl-10 pr-3 transition-colors placeholder:text-charcoal-mute hover:border-charcoal-mute focus:border-navy focus:outline-none"
            />
          </label>

          <div className="flex flex-wrap gap-4">
            <FilterSelect
              label={copy.columns.category}
              value={category}
              onChange={(v) => setCategory(v as Filter<ProjectCategory>)}
              options={categories}
            />
            <FilterSelect
              label={copy.columns.status}
              value={status}
              onChange={(v) => setStatus(v as Filter<ProjectStatus>)}
              options={statuses}
            />
          </div>
        </div>

        {/* summary line */}
        <div className="mb-4 flex flex-wrap gap-x-8 gap-y-1 text-sm text-charcoal-soft">
          <span>
            {t(copy.total)}: <strong className="text-navy tabular-nums">{num(rows.length)}</strong>
          </span>
          <span>
            {t(copy.budget)}: <strong className="text-navy tabular-nums">{money(totalBudget)}</strong>
          </span>
        </div>

        {rows.length === 0 ? (
          <p className="border border-dashed border-rule bg-cream px-6 py-12 text-center text-charcoal-soft">
            {t(copy.empty)}
          </p>
        ) : (
          <>
            <ProjectTable rows={rows} money={money} />
            <ProjectCards rows={rows} money={money} />
          </>
        )}
      </Container>
    </section>
  );
}

type RowsProps = { rows: Project[]; money: (amount?: number) => string };

function ProjectTable({ rows, money }: RowsProps) {
  const { t, num } = useLang();
  const cols = copy.columns;

  return (
    <div className="hidden overflow-x-auto rounded-xl border border-rule bg-cream md:block">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b-2 border-navy text-sm text-charcoal-soft">
            {[cols.name, cols.category, cols.status, cols.source, cols.contractor].map((c) => (
              <th key={c.en} scope="col" className="px-4 py-3 font-medium">
                {t(c)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((p) => (
            <tr key={p.id} className="border-b border-rule align-top transition-colors last:border-0 hover:bg-cream-deep/60">
              <th scope="row" className="px-4 py-4 font-normal">
                <span className="block font-medium text-charcoal">{t(p.name)}</span>
                <span className="mt-0.5 block text-sm text-charcoal-mute">
                  {p.location && t(p.location)}
                  {p.location && " · "}
                  {t(copy.updated)} {num(p.updated)}
                </span>
              </th>
              <td className="px-4 py-4 text-charcoal-soft">{t(categories[p.category])}</td>
              <td className="px-4 py-4">
                <StatusBadge status={p.status} />
              </td>
              <td className="px-4 py-4">
                <span className="block text-charcoal">{t(p.budgetSource)}</span>
                <span className="block text-sm tabular-nums text-charcoal-mute">{money(p.amount)}</span>
              </td>
              <td className="px-4 py-4">
                <Contractor project={p} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProjectCards({ rows, money }: RowsProps) {
  const { t, num } = useLang();
  const cols = copy.columns;

  return (
    <ul className="grid gap-4 md:hidden">
      {rows.map((p) => (
        <li key={p.id} className="rounded-xl border border-rule bg-cream p-4">
          <div className="flex items-start justify-between gap-3">
            <p className="font-medium text-charcoal">{t(p.name)}</p>
            <StatusBadge status={p.status} />
          </div>
          <p className="mt-1 text-sm text-charcoal-mute">
            {p.location && `${t(p.location)} · `}
            {t(copy.updated)} {num(p.updated)}
          </p>
          <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
            <dt className="text-charcoal-mute">{t(cols.category)}</dt>
            <dd className="text-charcoal">{t(categories[p.category])}</dd>
            <dt className="text-charcoal-mute">{t(cols.source)}</dt>
            <dd className="text-charcoal">
              {t(p.budgetSource)} <span className="text-charcoal-mute">({money(p.amount)})</span>
            </dd>
            <dt className="text-charcoal-mute">{t(cols.contractor)}</dt>
            <dd className="text-charcoal">
              <Contractor project={p} />
            </dd>
          </dl>
        </li>
      ))}
    </ul>
  );
}

function Contractor({ project }: { project: Project }) {
  const { t } = useLang();

  if (!project.contractor) return <span className="italic text-charcoal-mute">{t(copy.noContractor)}</span>;

  return (
    <>
      <span className="block">{t(project.contractor.name)}</span>
      {project.contractor.contact && <span className="block text-sm text-charcoal-mute">{project.contractor.contact}</span>}
    </>
  );
}

type FilterSelectProps = {
  label: L;
  value: string;
  onChange: (value: string) => void;
  options: Record<string, L>;
};

function FilterSelect({ label, value, onChange, options }: FilterSelectProps) {
  const { t } = useLang();

  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="text-charcoal-mute">{t(label)}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "rounded-sm border bg-cream px-2.5 py-2 text-charcoal transition-colors hover:border-charcoal-mute focus:border-navy focus:outline-none",
          value === "all" ? "border-rule" : "border-maroon",
        )}
      >
        <option value="all">{t(copy.all)}</option>
        {Object.entries(options).map(([key, l]) => (
          <option key={key} value={key}>
            {t(l)}
          </option>
        ))}
      </select>
    </label>
  );
}
