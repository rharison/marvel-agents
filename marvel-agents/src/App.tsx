import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { gray } from "./theme/colors";

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
      <h1>MARVEL</h1>
    </ThemeProvider>
  )
}

export default App
