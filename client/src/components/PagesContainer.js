import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class Pages extends Component {
  state = {
    currentPage: "/Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <Router>
        <div>
          <NavTabs
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Pages;