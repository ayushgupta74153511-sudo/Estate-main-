function Lightbox({ image, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <img src={image} alt="" className="max-h-[80vh]" />
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl"
      >
        ×
      </button>
    </div>
  );
}

export default Lightbox;