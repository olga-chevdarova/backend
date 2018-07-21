import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import $ from "jquery";

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

    didf() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/db",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "postman-token": "66594a9a-35ee-d674-5213-d99e31e6f3ae"
            },
            "processData": false,
            "data": "{\"aaa\":333}"
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }
    render() {
        return (
            <div className="App">
                <h1>Users</h1>
                <h2>Bye</h2>

                {this.state.users.map(user =>
                    <div>
                        <div key={user.id}>{user.task}</div>
                        <div>{user.date}</div>
                        <button onClick={this.didf.bind(this)}>click</button>
                    </div>

                )}



            </div>
        );
    }
}

export default App;