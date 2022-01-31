import { useEffect, useState } from "react";
import { Product } from "../models/products";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addProducts = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product3",
        price: 300,
        description: "la-la-la",
        brand: "test-brand",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  };

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name}: {product.price}
            </li>
          );
        })}
      </ul>
      <button onClick={addProducts}>Add product</button>
    </div>
  );
}

export default App;
