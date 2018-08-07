import React, { Component } from 'react';
import './App.css';
import './main.css';
import axios from 'axios';
import $ from "jquery";
import Chart_Pie from "./Components/Charts/__pie/Pie";
import List_Tasks from "./Components/Lists/Tasks/List_tasks";
import IndexPage from "./Pages/IndexPage/IndexPage";
import Testing_Quiz from "./Components/Testing/Quiz";
import Routes from "./Components/Testing/Routes";
import Router from "./Components/Testing/Router";
import Tasks from "./Components/Tasks/Tasks";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            points: [],
            value: ''
        }
    }
    //
    componentDidMount() {
        fetch('/points')
            .then(res => res.json())
            .then(points => this.setState({ points }));
    }

    didf() {
        let lorem = 10;
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
            "data": '{"aaa": lorem}'
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }
    checkbox_click(event) {
        this.setState({value: event.target.value});

        this.postId(+event.target.id);

        let currentPoints = +(event.target.className);

        let percent = Math.round((currentPoints*100)/this.state.taskss);
        console.log(this.state.taskss);

        let now = + this.state.tasks.points;

        this.setState({
            tasks: {
                points:now + percent
            }},
        )
        console.log(this.state.tasks.points)
    }
    render() {
        return (
            <div className="App">
                {/*{this.state.points.points}*/}
                {/*<Chart_Pie labels={["Первй", "djlhk"]} data={[10,20]} colors={['#FF6384','#36A2EB']}/>*/}
                {/*<h1>Users</h1>*/}
                {/*<h2>Bye</h2>*/}

                {/*<List_Tasks url="/new"/>*/}

                {/*<List_Tasks url="/new2"/>*/}
                <Testing_Quiz/>
                {/*<Routes/>*/}
                {/*<Router/>*/}
                {/*<Tasks url='/new3' onClick={this.checkbox_click.bind(this)} />*/}
            </div>
        );
    }
}

export default App;