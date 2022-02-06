import React from "react";
import Timer from "./Timer";

const Header = (props) => {

    const style = {
        border: '1px solid red',
    }

    return (
        <div style={style}>
            <p>You have found: {props.checkFoundCharacters()}</p>
            <Timer 
                gameWon={props.gameWon}></Timer>
        </div>
    )
}

export default Header;