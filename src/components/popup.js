import React from "react";
import '../components/popup.css';

function CustomDialog() {
  return (

    <div id="custom-dialog" class="custom-dialog">
    <div class="custom-dialog-content">
      <span class="custom-dialog-close" id="custom-dialog-close">&times;</span>
      <h2>Error</h2>
      <p>Please select a gender.</p>
      <button id="custom-dialog-button" >Close</button>
    </div>
  </div>

  );



}

export default CustomDialog;
