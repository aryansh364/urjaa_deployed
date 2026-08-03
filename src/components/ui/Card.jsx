export default function Card({ 
  children, 
  className = "", 
  hoverEffect = true 
}) {
  const baseClasses = "bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 ease-in-out";
  const hoverClasses = hoverEffect ? "hover:-translate-y-1 hover:shadow-lg" : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
