import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-emerald-700 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

        <div className="font-medium">
          Free Site Visit | Free Technical Consultation
        </div>

        <div className="flex gap-4">
          <FaFacebookF className="cursor-pointer hover:text-yellow-300" />
          <FaInstagram className="cursor-pointer hover:text-yellow-300" />
          <FaLinkedinIn className="cursor-pointer hover:text-yellow-300" />
        </div>

      </div>
    </div>
  );
}