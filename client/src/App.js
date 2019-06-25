import React, { Fragment, useState } from 'react';
import D3BarGraph from './components/D3/D3BarGraph';
import D3LineGraph from './components/D3/D3LineGraph';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PlayerCard from './components/player-card/PlayerCard';

import { compileStats } from './utils/compileStats';
import { playerSelects, statSelects } from './utils/selectOptions';
import { getPlayerBio } from './utils/getPlayerBio';

import './App.scss';

const App = () => {
  const [player, setPlayer] = useState('harden');
  const [playerData, setPlayerData] = useState(compileStats());
  const [statCategory, setStatCategory] = useState('ppg');
  const [playerBio, setPlayerBio] = useState(getPlayerBio());
  const [showBarGraph, setShowBarGraph] = useState(true);
  const [showLineGraph, setShowLineGraph] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="selections">
          <div className="select-group">
            <select
              className="select"
              onChange={(e) => {
                setPlayer(e.target.value);
                setPlayerData(compileStats(e.target.value, statCategory));
                setPlayerBio(getPlayerBio(e.target.value));
              }}
            >
              {playerSelects.map((player) => (
                <option key={player.value} value={player.value}>
                  {player.name}
                </option>
              ))}
            </select>
            <select
              className="select"
              onChange={(e) => {
                setStatCategory(e.target.value);
                setPlayerData(compileStats(player, e.target.value));
              }}
            >
              {statSelects.map((stat) => (
                <option key={stat.value} value={stat.value}>
                  {stat.name}
                </option>
              ))}
            </select>
            <select
              className="select"
              onChange={() => {
                setShowBarGraph(!showBarGraph);
                setShowLineGraph(!showLineGraph);
              }}
            >
              <option value="bar">Bar Graph</option>
              <option value="line">Line Graph</option>
            </select>
          </div>
        </div>

        <div className="dashboard">
          <PlayerCard {...playerBio} />
          <div>
            {showBarGraph && (
              <D3BarGraph data={playerData} statCategory={statCategory} />
            )}
            {showLineGraph && (
              <D3LineGraph data={playerData} statCategory={statCategory} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
