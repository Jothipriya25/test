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
                    <option value="fruit">5 to 10</option>
                    <option value="vegetable">15 to 25</option>
                    <option value="meat">25 to 30</option>
                    </select>
                    </div>

                    <div>
                    <label><b>Select occasion:</b></label>
                    <select className="occasion">
                    <option value="fruit">Birthday</option>
                    <option value="vegetable">Anniversary</option>
                    <option value="meat">Haldi</option>
                    </select>
                    </div>

                    <div>
                    <label><b>Select Gender: </b></label>
                    <input  className="gender" type="radio" value="Male" name="gender" /><b> Male</b>
                    <input  className="gender" type="radio" value="Female" name="gender" /><b>Female</b>
                    </div>
                </div>


                <div className="footer">
                    <a href="/"><button id="cancelBtn" >Cancel</button></a>
                    <button>Continue</button>   
                </div>
            </div>

        </div>
    );
    
}

export default Modal;