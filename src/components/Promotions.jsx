import React from "react";
import  ReactDOM  from "react-dom";

function Promotions() {
  return ReactDOM.createPortal(
        <div className="row" data-testid="promotions">
        <div className="col">
          <img
            src="../images/general/promocion.png"
            alt="Imagen de promociones"
            id="promotionsPicture"
          ></img>
        </div>
      </div>,
      document.querySelector("#portal")
  );
}

export default Promotions;

