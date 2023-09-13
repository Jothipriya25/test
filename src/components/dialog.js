import React from "react";
import './dialog.css';

function Modal({closeModal}) {
    return(
        <div className="Dialog_bg">
            <div className="Dialog_box">
                {/* <div className="title_Close_Btn">
                <button onClick={() => closeModal(false)}>X</button>
                </div> */}
                <div className="Dialog_title">
                   <h2>Choose Your Suggestion Here...</h2>
                </div>
                <div className="body">
                    <div>
                    <label><b>Select Age Range: </b></label>
                    <select className="age">
                    <option value="fruit">Default</option>
                    <option value="fruit">5 - 15</option>
                    <option value="vegetable">15 - 25</option>
                    <option value="meat">25 - 35</option>
                    <option value="meat">35 - 45</option>
                    <option value="meat">45 - 55</option>
                    </select>
                    </div>

                    <div>
                    <label><b>Select Occasion:</b></label>
                    <select className="occasion">
                    <option value="fruit">Default</option>
                    <option value="fruit">Birthday</option>
                    <option value="vegetable">Anniversary</option>
                    <option value="meat">Valentines day</option>
                    <option value="meat">House warming</option>
                    <option value="meat">Fathers day</option>
                    <option value="meat">Mothers day</option>
                    <option value="meat">Brothers day</option>
                    </select>
                    </div>

                    <div>
                    <label><b>Select Gender: </b></label>
                    <input  className="gender" type="radio" value="Male" name="gender" required/><b> Male</b>
                    <input  className="gender" type="radio" value="Female" name="gender" required/><b>Female</b>
                    </div>
                </div>


                <div className="footer">
                    <a href="/"><button id="cancelBtn" >Cancel</button></a>
                    <a href="/product"><button>Continue</button> </a>  
                </div>
            </div>

        </div>
    );
    
}

export default Modal;