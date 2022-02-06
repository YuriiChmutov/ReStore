import { Fragment, useEffect, useState } from "react";
import { Product } from "../../app/models/products";
// import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { ProductList } from "./ProductList";

// interface Props {
//     products: Product[];
//     addProduct: () => void;
// }

export default function Catalog() {
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
                pictureUrl: `http://picsum.photos/${prevState.length + 101}`,
            },
        ]);
    };
    return (
        <Fragment>
            <ProductList products={products} />
            <Button variant="contained" onClick={addProduct}>
                Add product
            </Button>
        </Fragment>
    );
}
