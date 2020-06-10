import React from 'react';
import {Switch,Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar/Navbar'
import ProductList from './Component/ProductList/ProductList'
import Details from './Component/Details'
import Default from './Component/Default'
import Cart from './Component/Cart'




function App() {
  return (
     <React.Fragment>
       <Navbar />
       
       <Switch  >
         <Route exact path="/" component={ProductList}></Route>
         <Route path="/details" component={Details}></Route>
         <Route path="/cart" component={Cart}></Route>
         <Route component={Default}></Route>

         
       </Switch>
       
     </React.Fragment>
  );
}

export default App;
