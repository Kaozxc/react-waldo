import React from "react";
import { useState } from "react/cjs/react.development";
import Timer from "./Timer";

const Header = (props) => {

    return (
        <div>
            <p>You have found: {props.checkFoundCharacters()}</p>
            <Timer
                gameWon={props.gameWon}></Timer>
        </div>
    )
}

export default Header;