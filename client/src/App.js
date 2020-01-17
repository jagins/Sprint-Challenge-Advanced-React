import React, { Component } from 'react';
import axios from 'axios';
import PlayerCard from './componets/PlayerCard';
import './App.css';

class App extends Component
{
  state = {
    playerCards: []
  };
  
  componentDidMount()
  {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      this.setState({playerCards: response.data})
    })
    .catch(err => console.log("Something went wrong: ", err));
  }
  render()
  {
    return(
      <div className='App'>
        {this.state.playerCards.map(player =>
        {
          return <PlayerCard
                    key={player.id}
                    country={player.country}
                    name={player.name}
                    searches={player.searches}/>
        })}
      </div>
    );
  }
}
export default App;