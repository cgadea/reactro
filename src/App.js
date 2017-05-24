import React, { Component } from 'react';
import './App.css';
import List from './components/list';

class App extends Component {
  addItem = () => {
    const { concerns, lastId } = this.state;

    this.setState({
      concerns: [
        { type: "kudos", text: "Foo", name: "Carlos", id: lastId + 1 },
      ].concat(concerns),
      lastId: lastId + 1,
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      concerns: [
        { type: "kudos", text: "Foo", name: "Carlos", id: 1 },
        { type: "kudos", text: "Bar", name: "Arjun", id: 2 },
        { type: "concern", text: "Herp", name: "Derp", id: 3 },
        { type: "concern", text: "Hello", name: "Rick", id: 4 },
        { type: "kudos", text: "Bye", name: "Morty", id: 5 },
        { type: "concern", text: "Lulz", name: "Mike", id: 6 },
      ],
      lastId: 6,
    };
  }

  render() {
    const { concerns } = this.state;

    return (
      <div className="card container">
        <button onClick={this.addItem}>
          Click Me
        </button>
        <List items={concerns} />
      </div>
    );
  }
}

export default App;
