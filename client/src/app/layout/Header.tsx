import { AppBar, Toolbar, Typography, Switch } from "@mui/material";

interface Props {
    onChangeMode: () => void;
}

export const Header = ({ onChangeMode }: Props) => {
    return (
        <AppBar sx={{ mb: 4 }} position="static">
            <Toolbar>
                <Switch color="secondary" onClick={onChangeMode} />
                <Typography variant="h6">RE-STORE</Typography>
            </Toolbar>
        </AppBar>
    );
};
