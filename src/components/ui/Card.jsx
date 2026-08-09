export default function Card({ 
  children, 
  className = "", 
  hoverEffect = true 
}) {
  const baseClasses = "bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all duration-300 ease-in-out";
  const hoverClasses = hoverEffect ? "hover:-translate-y-2 hover:shadow-[0_16px_40px_rgb(0,0,0,0.10)] hover:border-slate-200" : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
