import React from "react";
import './/help.css';
import { FaSearch } from "react-icons/fa";

function Help() {
    return(
        <div>
        <div className="help_bg">
            <div className="searchbar">
                <h1>How can we help you..!</h1><br></br>
                <input className="search" type="text" placeholder="Search..."/>
                <span className="search_font"><FaSearch/></span>
            </div>

        </div>
            <div className="container">
            <div className="grid">  
                <div className="grid1">
                    <h1>My Account</h1>
                    <p>see articles..</p>
                </div>
                <div className="grid2">
                    <h1>Payment</h1>
                    <p>see actions..</p>
                </div>
                <div className="grid3">
                    <h1>security</h1>
                    <p>see actions..</p>
                </div>
                <div className="grid4">
                    <h1>Payment Methods</h1>
                    <p>see actions..</p>
                </div>
            </div>
        </div>

        </div>
    );
}

export default Help;