import { useState } from 'react';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import FilterSort from './Components/FilterSort';
import ProductList from './Components/ProductList';
import productsData from './Data/Products';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  let filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === category
    );
  }

  if (sort === 'priceLow') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }

  if (sort === 'priceHigh') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  if (sort === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} />
      <FilterSort
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;