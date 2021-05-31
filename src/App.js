import {BrowserRouter as Router, Route,Switch,Redirect } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import Header from "./components/navbar/Header";
import Footer from "./components/footer/Footer";
import HomePage from './components/page/HomePage';
import Resume from './components/page/Resume';
import Projects from './components/page/Projects';

import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about_me">
              <HomePage />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              {/* <Resume /> */}
            </Route>
            <Route path="*">
              <Redirect
                to={{
                  pathname: "/"
                }}
              />
            </Route>
          </Switch>
        </CSSTransitionGroup>
     
    <Footer/>
    </Router>
  );
}

export default App;
