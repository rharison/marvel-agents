import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { gray } from "./theme/colors";
import { Login } from "./pages";
import { HomePageProvider } from "./context/HomePageContext";
import { Toaster } from "react-hot-toast";
import useAuth from "./hooks/useAuth";
import { LayoutApplication } from "./layout/Application";
import { appRoutes } from "./config/routes";

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
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <LayoutApplication />
                </PrivateRoute>
              }
            >
              {appRoutes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster />
      </HomePageProvider>
    </ThemeProvider>
  )
}

export default App
