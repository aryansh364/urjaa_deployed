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
        <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
