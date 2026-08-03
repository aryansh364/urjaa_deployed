export default function Card({ 
  children, 
  className = "", 
  hoverEffect = true 
}) {
  const baseClasses = "bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 ease-out";
  const hoverClasses = hoverEffect ? "hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]" : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
