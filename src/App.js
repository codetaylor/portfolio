import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import ProjectList from "./ProjectList";
import Resume from "./Resume";
import Contact from "./Contact";
import { ProjectProvider } from "./project-context";
import { Container } from "@material-ui/core";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";

const Separator = () => {
  return (
    <div className="Separator">
      <div className="Separator-arrow"></div>
    </div>
  );
};

const App = props => {
  return (
    <ProjectProvider>
      <Header history={props.history} location={props.location} />
      <Container className="App-container" maxWidth="md">
        <Separator />
        <Switch>
          <Route exact path="/" render={props => <Redirect to="/projects" />} />
          <Route exact path="/projects" render={props => <ProjectList />} />
          <Route exact path="/resume" render={props => <Resume />} />
          <Route exact path="/contact" render={props => <Contact />} />
        </Switch>
      </Container>
      <Footer />
    </ProjectProvider>
  );
};

export default withRouter(App);
