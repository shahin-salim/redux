import './App.css';
import Header from './container/Header';
import ProductCompenent from './container/ProductList'
import ProductDetails from './container/PorductDetail';



import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductCompenent />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; 
