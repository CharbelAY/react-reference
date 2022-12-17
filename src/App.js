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

    onSearchInput = (event) => {
        this.setState({searchTerm: event.target.value.toLowerCase()});
    }

    render() {

        const {monsters, searchTerm, placeHolderMessage} = this.state;
        const {onSearchInput} = this.onSearchInput;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchTerm);
        });

        return (
            <div className="App">
                <header className="App-header">
                    {
                        <>
                            <input
                                placeholder={placeHolderMessage}
                                onChange={onSearchInput}
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
