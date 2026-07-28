import type { ReactNode } from "react";

const Card = (props: { title: string; children: ReactNode }) => {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_0_6px_rgba(251,191,36,0.14)]" />
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          {props.title}
        </h2>
      </div>
      <div className="text-2xl font-semibold tracking-tight text-slate-900">
        {props.children}
      </div>
    </article>
  );
};

export default Card;
