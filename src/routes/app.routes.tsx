import { Switch, Route } from "react-router-dom";
//Pages
import HomePage from "../pages/home";
import PlayerForm from "../pages/playerForm";

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/player" component={PlayerForm} />
  </Switch>
);
export default AppRoutes;
