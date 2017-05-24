import React, { Component } from 'react';
import './App.css';
import List from './components/list';

class App extends Component {
  addItem = () => {
    const { concerns, lastId } = this.state;

    this.setState({
      concerns: [
        { shouldFade: true, type: "kudos", text: "Foo", name: "Carlos", id: lastId + 1 },
      ].concat(concerns),
      lastId: lastId + 1,
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      concerns: [
        { shouldFade: false, type: "kudos", text: "Foo", name: "Carlos", id: 1 },
        { shouldFade: false, type: "kudos", text: "Bar", name: "Arjun", id: 2 },
        { shouldFade: false, type: "concern", text: "Herp", name: "Derp", id: 3 },
      ],
      lastId: 3,
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
