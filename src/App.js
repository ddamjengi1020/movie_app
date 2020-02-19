import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
    </HashRouter>
  );
};

export default App;
