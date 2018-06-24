import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();

    }
    state = {users: []};

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    fetchData() {
        const myPost = {
            title: 'A post about true facts',
            body: '42',
            userId: 2
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(myPost),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch('/', options)
            .then(res => res.json())
            .then(res => console.log(res));
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