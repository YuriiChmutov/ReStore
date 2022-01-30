import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "product1", price: 100.0 },
    { name: "product2", price: 200.0 },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addProducts = () => {
    setProducts([...products, { name: "product3", price: 300 }]);
  };

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((x) => {
          return <li key={x.name}>{x.name}</li>;
        })}
      </ul>
      <button onClick={addProducts}>Add product</button>
    </div>
  );
}

export default App;
