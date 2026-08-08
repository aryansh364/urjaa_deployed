export default function PageLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600"></div>

        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
