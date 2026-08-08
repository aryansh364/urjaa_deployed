export default function Modal({
  isOpen,
  onClose,
  children
}) {

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl p-8 max-w-lg w-full relative">

        <button
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          ✕
        </button>

        {children}

      </div>

    </div>

  );

}