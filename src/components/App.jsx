import ProductCard from './ProductCard/ProductCard';
import './App.css';

const App = () => {
  return (
    <main>
      <h1>Каталог Товарів</h1>

      <ProductCard />
      <ProductCard />
      <ProductCard />

      <footer>© 2024 Hillel IT School</footer>
    </main>
  );
};

export default App;
