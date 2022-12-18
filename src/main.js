import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route to="/" exact={Hero} />
      </Switch>
    </Router>
  );
};

export default App;
