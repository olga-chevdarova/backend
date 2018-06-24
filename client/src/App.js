import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
        axios.post('https://morning-shore-34871.herokuapp.com/', {
            userId: '1',
            title: "Title",
            completed: false
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
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