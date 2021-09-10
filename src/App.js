import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'
import About from './About'
import Works from './Works';
import Contact from "./contact"
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Works />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
