export default function ContactInfoItem({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>

        <p className="text-gray-600 text-sm leading-relaxed mt-1">{value}</p>
      </div>
    </div>
  );
}
