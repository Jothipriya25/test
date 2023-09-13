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
    //     <div>
    //     {products.map(product => (
    //     <Product key={product.id}/>
    //     ))}
    //     <div className="product-card">

    //   <img
    //     src={products.imageUrl} // Add the URL for the product image
    //     alt={products.name}
    //     className="product-image"
    //   />
    //   <div className="product-details">
    //     <h2 className="product-name">{products.name}</h2>
    //     <p className="product-price">Price: ${products.price}</p>
    //     <p className="product-description">{products.description}</p>
    //     <button className="customizable">
    //       Customizable
    //     </button>
    //   </div>
    // </div>
    // </div>

    <div className="product-list">
      {products.map((product) => (
        <div key={product.prodId}>
          <div>
            <div className="product-card">
              <img
                src={product.prodimage} // Add the URL for the product image
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
          {/* <ProductImage productId = {product.prodId} /> */}
        </div>
      ))}
    </div>
  );
}

// function ProductImage({productId}) {
//     const [imageData, setImageData] = useState(null);

//     useEffect(() => {
//         fetch('http://localhost:8000/display/{prodId}')
//         .then((res) => res.blob())
//         .then((blob) => {
//             setImageData(URL.createObjectURL(blob));
//         })
//         .catch((err) => console.error(err));
//     }, [productId]);

//     return(
//         <div>
//             {imageData && <img src={imageData} alt='Product'/>}
//         </div>
//     )
// }

export default Product;
