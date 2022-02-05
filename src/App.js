import React, { useEffect, useState } from 'react';
import game from './images/game.jpg'
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import './App.css';

const App = (props) => {

  const [characters, setCharacters] = useState({});
  const [coordinates, setCoordinates] = useState({});
  const [wallyWasClicked, setWallyWasClicked] = useState(false);
  const [wizardWasClicked, setWizardWasClicked] = useState(false);
  const [wilmaWasClicked, setWilmaWasClicked] = useState(false);
  const [renderDropdown, setRenderDropdown] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // const getCoordinates = (e) => {
  //   let coordsX = e.nativeEvent.offsetX;
  //   let coordsY = e.nativeEvent.offsetY;

  //   let imgWidth = e.target.offsetWidth;
  //   let imgHeight = e.target.offsetHeight;
  //   console.log(coordsX)
  //   console.log(coordsY)
  //   console.log(imgWidth)
  //   console.log(imgHeight)

  //   let xInPercent = coordsX / imgWidth;
  //   let yInPercent = coordsY / imgHeight;

  //   return {
  //     coordsX,
  //     coordsY,
  //     imgWidth,
  //     imgHeight,
  //     xInPercent,
  //     yInPercent,
  //   }
  // }

  const handleClick = (e) => {
      if(coordinates.x <= 521 && coordinates.x >= 495 && coordinates.y <= 309 && coordinates.y >= 262 && e.target.alt === 'wally') {
        alert('You have found Wally!');
        setWallyWasClicked(true);
        setCharacters({...characters, [e.target.alt]: 'Wally'})
        setRenderDropdown(false)
      } else if(coordinates.x >= 727 && coordinates.x <= 741 && coordinates.y <= 320 && coordinates.y >= 297 && e.target.alt === 'wilma') {
        alert('You have found Wilma!')
        setWilmaWasClicked(true);
        setCharacters({...characters, [e.target.alt]: 'Wilma'})
        setRenderDropdown(false)
      } else if (coordinates.x >= 0 && coordinates.x <= 12 && coordinates.y >= 244  && coordinates.y <= 282 && e.target.alt === 'wizard') {
        alert('You have found Wizard!');
        setWizardWasClicked(true);
        setCharacters({...characters, [e.target.alt]: 'Wizard'})
        setRenderDropdown(false)
      } else if (e.target.alt === 'wizard') {
        alert(`That's not a Wizard!`)
      } else if (e.target.alt === 'wally') {
        alert(`That's not a Wally!`)
      } else if (e.target.alt === 'wilma') {
        alert(`That's not a Wilma!`)
      } 
  }


  useEffect(() => {
    setRenderDropdown(true);
    console.log('useeffect triggered')
  },[wallyWasClicked,wilmaWasClicked,wizardWasClicked])

  const handleDropdown = (e) => {
    console.log('dropdown start')
    document.getElementById("floatdiv").style.visibility = "visible";
    document.getElementById("floatdiv").style.position = "absolute";
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;

    document.getElementById("floatdiv").style.left=x+"px";
    document.getElementById("floatdiv").style.top=y+"px";
    console.log(x)
    console.log(y)
    setCoordinates({x: x, y: y});
    console.log('coordinates set', coordinates)
    return {
      x,
      y,
    }
  }

  const checkFoundCharacters = () => {
    //console.log('List of found characters:', characters.wilma, characters.wally, characters.wizard)
    if(wilmaWasClicked && wallyWasClicked && wizardWasClicked) {
      setGameWon(true);
      alert('Game won')
      return `${characters.wilma} && ${characters.wally} && ${characters.wizard}`
    } else if(wilmaWasClicked && wallyWasClicked) {
      return `${characters.wilma} && ${characters.wally}`
    } else if (wilmaWasClicked && wizardWasClicked) {
      return `${characters.wilma} && ${characters.wizard}`
    } else if (wallyWasClicked && wizardWasClicked) {
      return `${characters.wally} && ${characters.wizard}`
    } else if(wallyWasClicked) {
      return `${characters.wally}`
    } else if (wizardWasClicked) {
      return `${characters.wizard}`
    } else if (wilmaWasClicked) {
      return `${characters.wilma}`
    }
  }

  // if(gameWon) {
  //   alert('GAME OVER');
  // }

  return (
    <div className="App">  
    <Header
      checkFoundCharacters={checkFoundCharacters}
      characters={characters}
      wilmaWasClicked={wilmaWasClicked}
      wallyWasClicked={wallyWasClicked}
      wizardWasClicked={wizardWasClicked}
    />
      <img src={game} alt='game' onClick={handleDropdown}></img>
        {renderDropdown === true ? <Dropdown
          wilmaWasClicked={wilmaWasClicked}
          wallyWasClicked={wallyWasClicked}
          wizardWasClicked={wizardWasClicked}
          visible={renderDropdown}
          handleClick={handleClick}
          onClick={handleDropdown}
      />: null}
    </div>
  );
}

export default App;

/* {removeDropdown === false ? <Dropdown
  handleClick={handleClick}
  onClick={handleDropdown}
/>: null}
*/