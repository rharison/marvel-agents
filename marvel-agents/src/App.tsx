import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { gray } from "./theme/colors";
import { Login } from "./pages";
import { HomePageProvider } from "./context/HomePageContext";
import { Toaster } from "react-hot-toast";
import useAuth from "./hooks/useAuth";


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

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <HomePageProvider>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute children={<h1>Home</h1>} />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </HomePageProvider>
    </ThemeProvider>
  )
}

export default App
