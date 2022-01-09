
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'
import { useState } from 'react';
function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <div className="App">
      <Router>
        <Navbar onClick={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main>
          <Route path="/" component={HomeScreen} />
          <Route path="/cart" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </main>
      </Router>
      {/** HomeScreen */}
      {/** ProductScreen */}
      {/** CartScreen */}
    </div >
  );
}

export default App;
