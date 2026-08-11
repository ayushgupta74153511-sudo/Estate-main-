function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-500"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;