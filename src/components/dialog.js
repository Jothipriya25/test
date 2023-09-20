import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dialog.css";


function Modal({ setProductsData }) {
  const [Age, setAge] = useState("");
  const [Occasion, setOccasion] = useState("");
  const [radioValue, setradioValue] = useState("");
  const [isFormValid, setisFormValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const validateGender = () => {
    setShowPopup(true); // Show the popup
  };

  const closePopup = () => {
    setShowPopup(false); // Hide the popup
  };


  // function showPopup() {
  //   const popup = document.getElementById("genderPopup");
  //   popup.style.display = "block";
  // }
  
  // // Function to hide the popup
  // function closePopup() {
  //   const popup = document.getElementById("genderPopup");
  //   popup.style.display = "none";
  // }
  
  // Call showPopup() when gender is not selected
  // if (!radioValue) {
  //   showPopup();
  // }
  

  const handleAgeChange = (event) => {
    event.persist();
    const selectedAge = event.target.value;
    setAge(selectedAge);
    console.log("selectedAge:", selectedAge);
  };

  const handleOccasionChange = (event) => {
    event.persist();
    const selectedOccasion = event.target.value;
    setOccasion(selectedOccasion);
    console.log("selectedOccasion : ", selectedOccasion);
  };

  const handleRadioChange = (event) => {
    const selectedGender = event.target.value;
    setradioValue(selectedGender);  
    console.log("Gender:", selectedGender);
    validateForm();
    
  };

  useEffect(() => {
    validateForm();
  });

  const validateForm = () => {

    const isValid = radioValue !== '';
    setisFormValid(isValid);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isFormValid) {
      const apiUrl = `http://localhost:8000/getProduct/${Age}/${Occasion}/${radioValue}`;

      try {
        const response = await fetch(apiUrl);

        if (response.ok) {
          const productsData = await response.json();

          // Update productsData in the parent component
          setProductsData(productsData);

          // Navigate to the Product component
          navigate("/product");
        } else {
          // Handle the error if the API request fails.
        }
      } catch (error) {
        // Handle network or other errors here.
      }
    } else {
      // alert("Please select a gender");
      // setShowDialog(true);
      validateGender(); 
    }
  };
  

  const handleCancel = () => {
    navigate("/allproduct");
  };

  // const handleContinue = () => {
    
  //   navigate("/product");
  // };

  return (
    <form 
    onSubmit={handleSubmit}
    >
      <div className="Dialog_bg">
        <div className="Dialog_box">
          <div className="Dialog_box1">
            <div className="Dialog_title">
              <h2>Choose Your Suggestion Here...</h2>
            </div>
            <div className="body">
              <div>
                <label>
                  <b>Select Age Range: </b>
                </label>
                <select className="age" 
                value={Age} onChange={handleAgeChange}
                >
                  <option value ="">------Select------</option>
                  <option value ="null">Default</option>
                  <option value ="5-15">5 - 15</option>
                  <option value="15-25">15 - 25</option>
                  <option value="25-35">25 - 35</option>
                  <option value="35-45">35 - 45</option>
                  <option value="45-55">45 - 55</option>
                </select>
              </div>

              <div>
                <label>
                  <b>Select Occasion:</b>
                </label>
                <select
                  className="occasion"
                  value={Occasion}
                  onChange={handleOccasionChange}
                >
                  <option value ="">------Select------</option>
                  <option value="Null">Default</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Valentines day">Valentines day</option>
                  <option value="House warming">House warming</option>
                  <option value="Fathers day">Fathers day</option>
                  <option value="Mothers day">Mothers day</option>
                  <option value="Brothers day">Brothers day</option>
                </select>
              </div>

              <div>
                <label>
                  <b>Select Gender: </b>
                </label>
                <input
                  className="gender"
                  type="radio"
                  id="male"
                  value="Male"
                  name="gender"
                  checked={radioValue === "Male"}
                  onChange={handleRadioChange}
                />

                <b> Male</b>

                <input
                  className="gender"
                  type="radio"
                  id="female"
                  value="Female"
                  name="gender"
                  checked={radioValue === "Female"}
                  onChange={handleRadioChange}
                />

                <b>Female</b>
              </div>
            </div>

            <div className="footer">
              <button id="cancelBtn" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" 
              onClick={showPopup}
              >Continue</button>
            </div>
          </div>
        </div>
      </div>

          {/* Popup */}
          {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Please select a gender.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}


      {/* <div id="genderPopup" class="popup">
        <div class="popup-content">
          <p>Please select a gender.</p>
          <button id="closePopup" onClick={closePopup}>Close</button>
        </div>
      </div> */}
      {/* <div className="overlay"></div> */}

    </form>
    
    
  );

}




export default Modal;
