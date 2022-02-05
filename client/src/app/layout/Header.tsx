import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header = () => {
    return (
        <AppBar sx={{ mb: 4 }} position="static">
            <Toolbar>
                <Typography variant="h6">RE-STORE</Typography>
            </Toolbar>
        </AppBar>
    );
};
