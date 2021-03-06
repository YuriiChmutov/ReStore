import {
    Avatar,
    Button,
    Card,
    CardActions,
    // CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "@mui/material";
import { Product } from "../../app/models/products";

interface Props {
    product: Product;
}

export const ProductCard = ({ product }: Props) => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            bgcolor: "secondary.main",
                        }}
                    >
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: { fontWeight: "bold", color: "primary.main" },
                }}
            />
            <CardMedia
                component="img"
                sx={{ backgroundSize: "contain", bgcolor: "primary.light" }}
                image={product.pictureUrl}
                alt={product.name}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color="secondary" variant="h5">
                    ${(product.price / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to card</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    );
};
