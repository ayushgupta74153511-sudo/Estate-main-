function FilterPanel({ onFilter }) {
  return (
    <div className="flex gap-4 my-4">
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="border p-2"
      >
        <option value="">All Types</option>
        <option value="Villa">Villa</option>
        <option value="Apartment">Apartment</option>
        <option value="Penthouse">Penthouse</option>
      </select>
    </div>
  );
}

export default FilterPanel;