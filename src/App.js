import React, { useState } from 'react';

import MainCard from './component/mainCard/mainCard.component';
import Card from './component/card/card.component';

import CARD_DATA from './data/data.json';
import STYLES_DATA from './data/colors.js';

import './App.css';

function App() {
  const [time, setTime] = useState("weekly");

  const handleTime = (time) => {
    setTime(time);
  }

  const card = CARD_DATA;

  const style = STYLES_DATA;

  return (
    <div className='container'>
      <MainCard onClick = {handleTime} time = {time}/>
      <Card data = {card[0]} time = {time} style = {style.work}/>
      <Card data = {card[1]} time = {time} style = {style.play}/>
      <Card data = {card[2]} time = {time} style = {style.study}/>
      <Card data = {card[3]} time = {time} style = {style.exercise}/>
      <Card data = {card[4]} time = {time} style = {style.social}/>
      <Card data = {card[5]} time = {time} style = {style.selfcare}/>
    </div>
  )
}

export default App;
