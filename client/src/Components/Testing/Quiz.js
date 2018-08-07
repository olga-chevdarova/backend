import React, {Component} from 'react';
import PieChart from "../Charts/PieChart";
import Get_ArrayData from "../Server/getData/Get_ArrayData";
import $ from "jquery";
import TaskToDo from "../Server/getData/TaskToDo";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Get_ArrayData2 from "../Server/getData/Get_array2";

class Testing_Quiz extends Component {
    constructor() {
        super();
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state ={
            tasks: [],
            taskss : [],
            tasksss : [],
            value: '',
            selectedDay:  new Date(),
            activecomponent: "/new2",
            newArr: []
        }

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

    postId(id) {
        $.ajax({
            type: "POST",
            url: "/db",
            data: { id:id}
        })
    }
    savePoints() {
        $.ajax({
            type: "POST",
            url: "/db3",
            data: { points:this.state.tasks.points}
        })

        console.log( this.state.tasks.points);
        // this.setState({
        //     activecomponent: <TaskToDo url="/new3" onClick={this.checkbox_click.bind(this)}/>
        // })
    }

    componentWillMount() {
        fetch('/points')
            .then(res => res.json())
            .then(tasks => this.setState({ tasks }));
        fetch('/points2')
            .then(res => res.json())
            .then(taskss => this.setState({ taskss }));
        fetch('/points3')
            .then(res => res.json())
            .then(tasksss => this.setState({ tasksss }));
    }
    changed() {
        let minus = Math.round((+this.state.tasksss *100)/this.state.taskss);
        let nowok = this.state.tasks.points - minus;
        if (nowok < 0) {
            nowok = 0;
        }
        this.setState({
            tasks: {
                points:nowok
            }}
        )
    }
    componentDidMount() {
        fetch('/date/' + this.state.selectedDay.toISOString() )
            .then(res => res.json())
            .then(this.setState({
                activecomponent:'/date/' + this.state.selectedDay.toISOString()
            }))
            .then(newArr => this.setState({ newArr }));
        console.log(this.state.activecomponent)
    }

    handleDayClick(day) {

        this.setState((prevState, props) => ({
            selectedDay: day
        }),() => {
            fetch('/date/' + this.state.selectedDay.toISOString() )
                .then(res => res.json())
                .then(this.setState({
                    activecomponent:'/date/' + this.state.selectedDay.toISOString()
                }))
                .then(newArr => this.setState({ newArr }));
            console.log(this.state.activecomponent)
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
            <div className="container">

                <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
                <button onClick={this.changed.bind(this)}>changes</button>
                <div className="flex">
                    <div className="testing_chart">
                        <PieChart data={[this.state.tasks.points, 100] } backgroundColors = {['rgba(5, 196, 107,1.0)', 'rgba(128, 142, 155,0.3)']} labels={['Ваш прогресс', 'Ваш потенциал']} datalabels={'true'} />
                    </div>
                    <div className="testing_qustions">
                        <DayPicker onDayClick={this.handleDayClick} />
                        <ul>
                            {this.state.newArr.map(tasks =>
                                <tr key={tasks.id}>
                                    <td>
                                        <input type="checkbox" value={this.state.value} id={tasks.id} className={tasks.points} onClick={this.checkbox_click.bind(this)}/>
                                    </td>
                                    <td >{tasks.task}
                                        <p><em>{tasks.advice}
                                        </em></p> </td>


                                    <td >{tasks.date}</td>
                                    {/*<div>{ tasks.date}</div>*/}
                                    {/*<div>{tasks.frequency}</div>*/}

                                </tr>
                            )}
                        </ul>
                        {/*<Get_ArrayData url={this.state.activecomponent} onClick={this.checkbox_click.bind(this)} />*/}
                        <div className="btn_wrap">
                            <button  className="btn_start " onClick={this.savePoints.bind(this)}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testing_Quiz;