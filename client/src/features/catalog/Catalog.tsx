import { Fragment } from "react";
import { Product } from "../../app/models/products";
// import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { ProductList } from "./ProductList";

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
    return (
        <Fragment>
            <ProductList products={products} />
            <Button variant="contained" onClick={addProduct}>
                Add product
            </Button>
        </Fragment>
    );
}
