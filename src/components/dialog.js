import React from "react";
import './dialog.css';

function Modal({closeModal}) {
    return(
        <div className="Dialog_bg">
            <div className="Dialog_box">
                <div className="title_Close_Btn">
                <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className="Dialog_title">
                   <h2>Choose ur suggestion here...</h2>
                </div>
                <div className="body">
                    <div>
                    <select className="age">
                    <option value="fruit">5 to 10</option>
                    <option value="vegetable">15 to 25</option>
                    <option value="meat">25 to 30</option>
                    </select>
                    </div>

                    <div>
                    <select className="occasion">
                    <option value="fruit">Birthday</option>
                    <option value="vegetable">Anniversary</option>
                    <option value="meat">Haldi</option>
                    </select>
                    </div>
                </div>
                <div>
                    <input  className="gender" type="radio" value="Male" name="gender" /> Male
                    <input  className="gender" type="radio" value="Female" name="gender" /> Female
                </div>

                <div className="footer">
                    <button id="cancelBtn">Cancel</button>
                    <button>Continue</button>   
                </div>
            </div>

        </div>
    );
    
}

export default Modal;