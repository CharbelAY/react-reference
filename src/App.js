import {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        // Object containing local class component state
        this.state = {
            message: 'WELCOME',
            message2: 'Welcome2'
        }
    }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <p>
                {/*Curly braces to execute javascript*/}
                {this.state.message + ' to react!'}
            </p>
            <button onClick={() => {
                // this.state.message = 'new message' will not update the DOM
                // Because for react the pointer this.state still points to the same object in memory
                // And it won't know that it has changed. So it does not compare values it just checks if it's the same
                // reference to the object in memory
                // To update correctly use setState. It can take an object and will create a new object by merging the old object
                // And the passed object. React will see a new object in memory and will rerender
                this.setState({message: 'Done!'});
            }}>Update message</button>
          </header>
        </div>
    );
  }
}

export default App;
