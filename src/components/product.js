import React, { useEffect, useState } from "react";
import "./product.css";

function Product() {
  // const [products,setProducts] = useState([]);

  //     useEffect(() => {
  //     fetch("http://localhost:8000/getAllProducts")
  //     .then((res)=>res.json())
  //     .then((result)=>setProducts(result))
  //     .catch((err) => console.log(err));

  // },[]
  // );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getAllProducts")
      .then((res) => res.json())
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.prodId}>
          <div>
            <div className="product-card">
              <img
                src={`data:image/jpeg;base64,${product.base64Image}`}
                alt={products.name}
                className="product-image"
              />
              <div className="product-details">
                <h2 className="product-name">{product.prodName}</h2>
                <p className="product-price">Price: Rs. {product.prodPrice}</p>
                <p className="product-description">{product.prodDesc}</p>
                <button className="customizable">Customizable</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Product;
