import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  async componentDidMount() {
    // Call self-hosted API to get users response
    const res = await fetch("/users");
    const users = await res.json();
    this.setState({
      users,
    });
  }
  render() {
    return (
      <div className="App">
        <p>Hi this is your user</p>
        {this.state.users.map((user) => (
          <p>{user}</p>
        ))}
      </div>
    );
  }
}
export default App;
