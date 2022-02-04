import React, { useEffect, useState } from 'react';
import wally from '../images/wally.jpg'
import wizard from '../images/wizard.jpg'
import wilma from '../images/wilma.jpg'

const style = {
    border: '1px solid red',
    position: 'fixed',
    backgroundColor: 'red',
    visibility: 'hidden',
}


const styleImg = {
    width: '40px',
}

const Dropdown = (props) => {

    useEffect(() => {
        console.log('Dropdown rendered')
    })

    return (
        <div id="floatdiv" style={style}>
            <div value="wally" onClick={props.handleClick}>
                <img src={wally} alt='wally' style={styleImg}></img>
                Wally
            </div>
            <div value="wizard" onClick={props.handleClick}>
                <img src={wizard} alt="wizard" style={styleImg}></img>
                Wizard
            </div>
            <div value="wilma" onClick={props.handleClick}>
                <img src={wilma} alt='wilma' style={styleImg}></img>
                Wilma
            </div>
        </div>
    )
}

export default Dropdown;