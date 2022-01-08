
import './App.css';
import './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          {/* <Switch> */}
          <Route path="/" component={HomeScreen} />
          <Route path="/cart" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          {/* </Switch> */}
        </main>
      </Router>

      {/** Navbar  */}
      {/** SideDrawer   */}
      {/** NaBackdrop */}
      {/** HomeScreen */}
      {/** ProductScreen */}
      {/** CartScreen */}
    </div >
  );
}

export default App;
