import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

const theme = createTheme({
  palette: {
    primary: { main: "#007FFF" }, // Change primary color
    secondary: { main: "#FF4081" },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
