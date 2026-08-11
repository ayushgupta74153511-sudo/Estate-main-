function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by title..."
      onChange={(e) => onSearch(e.target.value)}
      className="border p-2 w-full rounded"
    />
  );
}

export default SearchBar;