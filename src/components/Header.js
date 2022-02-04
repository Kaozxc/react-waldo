import React from "react";

const Header = (props) => {

    const style = {
        border: '1px solid red',
    }

    const checkFoundCharacters = () => {
        //console.log('List of found characters:', characters.wilma, characters.wally, characters.wizard)
        if(props.wilmaWasClicked && props.wallyWasClicked && props.wizardWasClicked) {
          alert(`You have found: ${props.characters.wilma} ${props.characters.wally} ${props.characters.wizard}`)
          return `${props.characters.wilma} && ${props.characters.wally} && ${props.characters.wizard}`
        } else if(props.wilmaWasClicked && props.wallyWasClicked) {
          return `${props.characters.wilma} && ${props.characters.wally}`
        } else if (props.wilmaWasClicked && props.wizardWasClicked) {
          return `${props.characters.wilma} && ${props.characters.wizard}`
        } else if (props.wallyWasClicked && props.wizardWasClicked) {
          return `${props.characters.wally} && ${props.characters.wizard}`
        } else if(props.wallyWasClicked) {
          return `${props.characters.wally}`
        } else if (props.wizardWasClicked) {
          return `${props.characters.wizard}`
        } else if (props.wilmaWasClicked ) {
          return `${props.characters.wilma}`
        }
      }

    return (
        <div style={style}>
            <p>You have found: {checkFoundCharacters()}</p>
        </div>
    )
}

export default Header;