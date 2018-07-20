import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();

    }
    state = {users: []};

    componentDidMount() {
        fetch('/new')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    iki() {

        fetch('http://localhost:3001/artist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify('Olga')
        }).then(function(response) {
            return response.json();
        })
    }


    render() {
        return (
            <div className="App">
                <h1>Users</h1>
                <h2>Bye</h2>
                {this.state.users.map(user =>
                    <div key={user.id}>{user.task}</div>
                )}


            </div>
        );
    }
}

export default App;