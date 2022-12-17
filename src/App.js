import React from 'react'
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        // Object containing local class component state
        this.state = {
            monsters: [],
            searchTerm: '',
            placeHolderMessage: 'search for a monster...'
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((responseJson) => {
                const monsters = [];
                for (let key in responseJson) {
                    monsters.push({
                        id: responseJson[key].id,
                        name: responseJson[key].name
                    })
                }
                this.setState(() => {
                    return {monsters: monsters}
                });
            })
    }

    render() {

        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(this.state.searchTerm);
        });

        return (
            <div className="App">
                <header className="App-header">
                    {
                        // when looping and rendering items they need to have a unique key to help react identify
                        // them when manipulating the items
                        // and changing their properties
                        <>
                            <input
                                placeholder={this.state.placeHolderMessage}
                                onChange={(event) => {
                                    this.setState({searchTerm: event.target.value.toLowerCase()});
                                }}
                                type={"search"}
                            />
                            {filteredMonsters.map(monster =>
                                <h1 key={monster.id}>{monster.name}</h1>
                            )}
                        </>
                    }
                </header>
            </div>
        );
    }
}

export default App;
