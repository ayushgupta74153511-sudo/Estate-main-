function PropertyGallery({ images }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((img, i) => (
        <img key={i} src={img} alt="" className="rounded" />
      ))}
    </div>
  );
}

export default PropertyGallery;