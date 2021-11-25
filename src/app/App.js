/* eslint-disable no-unused-vars */
import Product from './components/product';
import NavBar from './components/Navbar';
import Products from './components/products';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/*<Product/>*/}
      <Products/>
    </div>
  );
}

export default App; 
