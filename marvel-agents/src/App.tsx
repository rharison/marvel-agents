import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { gray } from "./theme/colors";
import { Login } from "./pages";

const mdTheme = createTheme(
  {
    palette: {
      divider: '#EBEFF2',
      background: {
        default: gray['background'],
      }
    },
  },
);

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
