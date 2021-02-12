import { ThemeProvider } from "styled-components";
//Routes
import Routes from "./routes";

//Global Styles
import GlobalStyles from "./styles/GlobalStyles";

//Default -> Hook i`ll choice in future
import { useTheme } from "./hooks/themeHook/themeProvider";
import dark from "./styles/themes/light";

const App = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
