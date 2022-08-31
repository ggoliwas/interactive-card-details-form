import React from "react";

const Header = ({inputData}) => {
    return(
        <header className="header">
            <div className="cc">
                <div className="cc__front">
                    <img src="assets/card-logo.svg" className="cc__logo" alt="credit card logo" srcset="" />
                    <span className="cc__number">{inputData.number || "0000 0000 0000 0000"}</span>
                    <span className="cc__cardholder">{inputData.owner|| "jane applessed"}</span>
                    <span className="cc__expdate">{inputData.mm || "00"}/{inputData.yy || "00"}</span>
                </div> 
                <div className="cc__back">
                   <span className="cc__cvc">{inputData.cvc || "000"}</span>
                </div>
            </div>
        </header>
    )
}

export default Header;