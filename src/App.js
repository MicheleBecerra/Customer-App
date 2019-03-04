import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import './App.css';

class App extends Component {
  
  renderHome = () => <h1>HOME ... </h1>
  renderCustomerContainer = () => <h2>Customer Container </h2>
  renderCustomerListContainer = () => <h2>Customer List Container </h2> 
  renderCustomerNewContainer = () => <h2>Customer  New Container </h2>

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome}/>
          <Route exact path="/customers" component = {this.renderCustomerListContainer} />
          <Switch>
          <Route exact path="/customers/new" component = {this.renderCustomerNewContainer} />
          <Route exact path="/customer/:curp" component = {this.renderCustomerContainer} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
