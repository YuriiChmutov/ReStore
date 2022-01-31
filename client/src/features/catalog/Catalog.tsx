import { Fragment } from "react";
import { Product } from "../../app/models/products";
// import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Avatar, Button, ListItemAvatar, ListItemText } from "@mui/material";

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
    return (
        <Fragment>
            <List>
                {products.map((product) => {
                    return (
                        <ListItem key={product.id}>
                            <ListItemAvatar>
                                <Avatar src={product.pictureUrl} />
                            </ListItemAvatar>
                            <ListItemText>
                                {product.name} - {product.price}
                            </ListItemText>
                        </ListItem>
                    );
                })}
            </List>
            <Button variant="contained" onClick={addProduct}>
                Add product
            </Button>
        </Fragment>
    );
}
