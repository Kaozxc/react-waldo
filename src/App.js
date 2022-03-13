import React, { useEffect, useState } from 'react';
import game from './images/game.jpg'
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import './App.css';

const App = (props) => {

  const [characters, setCharacters] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [wallyWasClicked, setWallyWasClicked] = useState(false);
  const [wizardWasClicked, setWizardWasClicked] = useState(false);
  const [wilmaWasClicked, setWilmaWasClicked] = useState(false);
  const [renderDropdown, setRenderDropdown] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const handleClick = (e) => {
    if (coordinates.x <= 521 && coordinates.x >= 495 && coordinates.y <= 309 && coordinates.y >= 262 && e.target.alt === 'wally') {
      alert('You have found Wally!');
      setWallyWasClicked(true);
      setCharacters([...characters, 'Wally'])
      setRenderDropdown(false)
    } else if (coordinates.x >= 727 && coordinates.x <= 741 && coordinates.y <= 320 && coordinates.y >= 297 && e.target.alt === 'wilma') {
      alert('You have found Wilma!')
      setWilmaWasClicked(true);
      setCharacters([...characters, 'Wilma'])
      setRenderDropdown(false)
    } else if (coordinates.x >= 0 && coordinates.x <= 12 && coordinates.y >= 244 && coordinates.y <= 282 && e.target.alt === 'wizard') {
      alert('You have found Wizard!');
      setWizardWasClicked(true);
      setCharacters([...characters, 'Wizard'])
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
  }, [wallyWasClicked, wilmaWasClicked, wizardWasClicked])

  const handleDropdown = (e) => {
    document.getElementById("floatdiv").style.visibility = "visible";
    document.getElementById("floatdiv").style.position = "absolute";
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;

    document.getElementById("floatdiv").style.left = x + "px";
    document.getElementById("floatdiv").style.top = y + "px";
    setCoordinates({ x: x, y: y });
    return {
      x,
      y,
    }
  }

  const checkFoundCharacters = () => {
    if (wilmaWasClicked && wallyWasClicked && wizardWasClicked) {
      return `${characters}`
    } else {
      return `${characters}`
    }
  }

  const Leaderboard = () => {
    let time = document.getElementsByClassName('time')[0].textContent;
    let sum = time.slice(-3).trim();
    let name = prompt('Please provide your name for the SCORE BOARD');
    if (name === null || name === '') {
      name = 'Player';
    }
    alert(`${name} got ${sum}`);
  }

  useEffect(() => {
    if (wilmaWasClicked && wallyWasClicked && wizardWasClicked) {
      setGameWon(true);
      alert('You have won');
      Leaderboard();
    }
  }, [wilmaWasClicked, wallyWasClicked, wizardWasClicked])

  return (
    <div className="App">
      <Header
        checkFoundCharacters={checkFoundCharacters}
        characters={characters}
        gameWon={gameWon}
      />
      <img src={game} alt='game' onClick={handleDropdown}></img>
      {renderDropdown === true ? <Dropdown
        wilmaWasClicked={wilmaWasClicked}
        wallyWasClicked={wallyWasClicked}
        wizardWasClicked={wizardWasClicked}
        visible={renderDropdown}
        handleClick={handleClick}
        onClick={handleDropdown}
      /> : null}
    </div>
  );
}

export default App;