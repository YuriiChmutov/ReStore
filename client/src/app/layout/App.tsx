import { Fragment, useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/products";
import Typography from "@mui/material/Typography";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

    const addProduct = () => {
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
        <Fragment>
            <Typography variant="h3">Re-Store</Typography>

            <Catalog products={products} addProduct={addProduct} />
        </Fragment>
  );
}

export default App;
