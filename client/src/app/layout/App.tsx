import { Fragment, useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/products";
import { Header } from "./Header";
import { Container, CssBaseline } from "@mui/material";

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
            <CssBaseline />
            <Header />
            <Container>
                <Catalog products={products} addProduct={addProduct} />
            </Container>
        </Fragment>
    );
}

export default App;
