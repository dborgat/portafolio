import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../../componentes/Header";
import Proyects from "../../componentes/Proyects";
import Contact from "../../componentes/Contact";
import Content from "../../componentes/Content";
import Footer from "../../componentes/Footer";
import Particles from "../../componentes/Particles";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/proyects" component={Proyects} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
      {/* <Particles /> */}
    </div>
  );
};

export default App;
