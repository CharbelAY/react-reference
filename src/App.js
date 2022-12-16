import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        // Object containing local class component state
        this.state = {
            monsters: [
                {id: 1, name: 'Linda', rank: 7},
                {id: 2, name: 'Pablo', rank: 9},
                {id: 3, name: 'Gustavo', rank: 5}
            ]
        }
    }

  render() {
    return (
        <div className="App">
          <header className="App-header">
              {
                  // when looping and rendering items they need to have a unique key to help react identify
                  // them when manipulating the items
                  // and changing their properties
                  this.state.monsters.map(monster =>
                      <h1 key={monster.id}>{monster.name}</h1>
                  )
              }
          </header>
        </div>
    );
  }
}

export default App;
