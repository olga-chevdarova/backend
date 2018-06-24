import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {users: []};

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }
    fetchData() {
        fetch('/', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: {
                "first_name": "Olga"
            }
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Users</h1>
                <h2>bye</h2>
                {this.state.users.map(user =>
                    <div key={user.id}>{user.username}</div>
                )}

                <button onClick={this.fetchData.bind(this)}>Load More</button>
            </div>
        );
    }
}

export default App;