function PropertyFeatures({ features }) {
  return (
    <ul className="list-disc pl-6 mt-4">
      {features.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
  );
}

export default PropertyFeatures;