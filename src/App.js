import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        {
          "id": 1,
          "name": "Foo",
          "age": "20"
        },
        {
          "id": 2,
          "name": "Bar",
          "age": "30"
        },
        {
          "id": 3,
          "name": "Baz",
          "age": "40"
        }
      ]
    }
  }

  render() {
    
    var myStyle = {
      fontSize: 20,
      color: '#000852'
    };
    return (
      <div style={myStyle}>
        <Header />
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    )
  }
}
/*
class Content extends Component {
  render() {
    return(
      <div>
        <h2>Content</h2>
        <p>The content text!!!</p>
      </div>
    )
  }
}
*/
class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    )
  }
}

export default App;
