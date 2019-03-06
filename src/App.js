import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer  from './containers/HomeContainer';
import './App.css';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {
  
  renderHome = () => <HomeContainer/> ;
  renderCustomerContainer = () => <h2> Customer Container </h2> ;
  renderCustomerListContainer = () => <CustomersContainer/> ;
  renderCustomerNewContainer = () => <h2>Customer  New Container </h2> ;

  //Se usa el componente switch par hacer un wrapper de las dos rutas quue tienen conflicto. Resuelve la ruta más especíica primero.
  render() {
    return (
      <Router>
        <div className="App">
        
          <Route exact path="/" component={this.renderHome}/>
          <Route exact path="/customers" component = {this.renderCustomerListContainer} />
 
          <Switch>
          <Route  path="/customers/new" component = {this.renderCustomerNewContainer} />
          <Route  path="/customers/:curp" component = {this.renderCustomerContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
