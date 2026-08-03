export default function SectionTitle({
  title,
  subtitle,
  description,
  alignment = "center",
  className = "",
}) {
  const alignClass = alignment === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {subtitle && (
        <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
