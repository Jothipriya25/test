import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dialog from './components/dialog';
import Navbar from './components/navbar';
import Home from './components/home';
import Help from './components/help';
import Product from './components/product';
import AllProduct from './components/allproducts';


function App() {

  const [productsData, setProductsData] = useState([]);

  return(

  <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact Component={Home} />
      <Route path='/help' exact Component={Help} />
      {/* <Route path='/dialog' exact Component={Dialog} />
      <Route path='/product' element={<Product productsData = {productsData} />} /> */}
      <Route
          path="/dialog"
          element={<Dialog setProductsData={setProductsData} />}
      />
      <Route path="/product" element={<Product productsData={productsData} />} />
      <Route path='/allproduct' exact Component={AllProduct} />
    </Routes>
  </Router>

  );

// let components;
// switch (window.location.pathname) {
//   case '/':
//     components = (
//       <div>
//         <Navbar />
//         <Home />
//       </div>
//     );
//     break;
//   case '/menu':
//     components = (
//       <div>
//         <Navbar />
//       </div>
//     ); 
//     break;
//   case '/about':
//     components = (
//       <div>
//         <Navbar />
//       </div>
//     );
//     break;
//     case '/help':
//       components = (
//         <div>
//           <Navbar />
//           <Help />
//         </div>
//       );
//       break;
//     case '/dialog':
//       components = (
//         <div>
//           <Navbar />
//           <Dialog />
          
//         </div>
//       );
//       break;
//       case '/product':
//       components = (
//         <div>
//           <Navbar />
//           <Product/>
          
//         </div>
//       );
//       break;
//   default:
//     components = <Navbar /> ;
// }
// return <>{components}
// </>;
}

export default App;