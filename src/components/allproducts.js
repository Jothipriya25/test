import React, {useState, useEffect} from "react";
import { BiSolidHandDown } from "react-icons/bi";
import "./product.css";

function AllProduct() {

  const [products,setProducts] = useState([]);

      useEffect(() => {
      fetch("http://localhost:8000/getAllProducts")
      .then((res)=>res.json())
      .then((result)=>setProducts(result))
      .catch((err) => console.log(err));

  },[]);

  return (
    <div>
      <div className="Sugg_btn">
      <h2>Want Products based on Suggestions..?</h2>
      <h2><BiSolidHandDown size={70}/></h2>
        <a href="/dialog"><button><b>Click Here..!</b></button></a>
      </div>
    <div className="product-list">
      {products.map((product) => (
        <div key={product.prodId}>
          <div>
            <div className="product-card">
              <img
                src={`data:image/jpeg;base64,${product.base64Image}`}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h2 className="product-name">{product.prodName}</h2>
                <p className="product-price">Price: Rs. {product.prodPrice}</p>
                <p className="product-description">{product.prodDesc}</p>

                {product.isCustz ? (
                <button className="customizable">Customizable</button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default AllProduct;
