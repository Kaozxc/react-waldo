import React, {useState, useEffect } from "react";
import Timer from "./Timer";

const Header = (props) => {

    const style = {
        border: '1px solid red',
    }

    return (
        <div style={style}>
            <p>You have found: {props.checkFoundCharacters()}</p>
            <Timer 
                wilmaWasClicked={props.wilmaWasClicked}
                wallyWasClicked={props.wallyWasClicked}
                wizardWasClicked={props.wizardWasClicked}></Timer>
        </div>
    )
}

export default Header;