import { Product } from "../../app/models/products";
import { Grid, List } from "@mui/material";
import { ProductCard } from "./ProductCard";

interface Props {
    products: Product[];
}

export const ProductList = ({ products }: Props) => {
    return (
        <List>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item xs={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </List>
    );
};
