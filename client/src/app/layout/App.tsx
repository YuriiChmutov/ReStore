import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Header } from "./Header";
import {
    Container,
    CssBaseline,
    createTheme,
    ThemeProvider,
} from "@mui/material";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const palletType = darkMode ? "dark" : "light";
    const theme = createTheme({
        palette: {
            mode: palletType,
            background: {
                default: palletType === "light" ? "#eaeaea" : "#121212",
            },
        },
    });

    const handleChangeMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header onChangeMode={handleChangeMode} />
            <Container>
                <Catalog />
            </Container>
        </ThemeProvider>
    );
}

export default App;
