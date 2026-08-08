export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-emerald-600 hover:bg-emerald-700 text-white",

    outline:
      "border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white",

    secondary:
      "bg-yellow-400 text-black hover:bg-yellow-500",
  };

  return (
    <button
      className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}