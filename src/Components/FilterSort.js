const FilterSort = ({ category, setCategory, sort, setSort }) => {
  return (
    <div className="filters">
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
      </select>

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default FilterSort;