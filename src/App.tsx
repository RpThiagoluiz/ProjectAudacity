import { ThemeProvider } from "styled-components";
//Routes
import Routes from "./routes";

//Global Styles
import GlobalStyles from "./styles/GlobalStyles";

//Default -> Hook i`ll choice in future
import defaultTh from "./styles/themes/defaultInit";

const App = () => (
  <ThemeProvider theme={defaultTh}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
);

export default App;
