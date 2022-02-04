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
    
    console.log('event target value: ', e.target.alt);
    console.log('halko kordy', coordinates.x, coordinates.y)
      if(coordinates.x <= 521 && coordinates.x >= 495 && coordinates.y <= 309 && coordinates.y >= 262 && e.target.alt === 'wally') {
        alert('YES, THATS WALLY');
        setWallyWasClicked(true);
        setCharacters({...characters, [e.target.alt]: 'Wally'})
        setRenderDropdown(false)
      } else if(coordinates.x >= 727 && coordinates.x <= 741 && coordinates.y <= 320 && coordinates.y >= 297 && e.target.alt === 'wilma') {
        alert('Yes thats Wilma')
        setWilmaWasClicked(true);
        setCharacters({...characters, [e.target.alt]: 'Wilma'})
        setRenderDropdown(false)
      } else if (coordinates.x >= 0 && coordinates.x <= 12 && coordinates.y >= 244  && coordinates.y <= 282 && e.target.alt === 'wizard') {
        alert('Yes, thats Wizard');
        setWizardWasClicked(true);
        setCharacters({...characters, [e.target.alt]: 'Wizard'})
        setRenderDropdown(false)
      } else {
        console.log('nooo');
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
    setCoordinates({x: x, y: y,});
    console.log('coordinates set', coordinates)
    return {
      x,
      y,
    }
  }

  return (
    <div className="App">
    <Header
      characters={characters}
      wilmaWasClicked={wilmaWasClicked}
      wallyWasClicked={wallyWasClicked}
      wizardWasClicked={wizardWasClicked}
    />
      <img src={game} alt='game' onClick={handleDropdown}></img>
        {renderDropdown === true ? <Dropdown
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