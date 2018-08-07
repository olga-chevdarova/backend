import React, {Component} from 'react';
import $ from "jquery";
import ChartPieew from "../../Charts/ChartPieew";
const labels = ['Ваш прогресс', 'Ваш потенциал',];
const colors = ['#2fc552', '#9db7c4',];


class List_Tasks extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            value: '',
            chart:[0,100]
        }
    }
    checkbox_click(event) {
        this.setState({value: event.target.value});

        this.postId(+event.target.id);

        let currentPoints = +(event.target.className);

        let percent = Math.round((currentPoints*100)/973);

        let now = this.state.chart[0];
        this.setState({
            chart: [now+percent, 100],
        });
        console.log(currentPoints)
    }



    postId(id) {
        $.ajax({
            type: "POST",
            url: "/db",
            data: { id:id}
        })
    }
    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(tasks => this.setState({ tasks }));
    }



    render() {
        return (
            <div className="container">
                <div className="flex">
                    <div className="flex-chart">
                        <ChartPieew labels={labels} data={ this.state.chart} colors={colors}/>
                    </div>
                    <div className="flex-text">
                        <table>

                            {this.state.tasks.map(tasks =>
                                <tr key={tasks.id}>
                                    <td>
                                        <input type="checkbox" value={this.state.value} id={tasks.id} className={tasks.points} onClick={this.checkbox_click.bind(this)}/>
                                    </td>
                                    <td >{tasks.desc}</td>

                                    {/*<div>{ tasks.date}</div>*/}
                                    {/*<div>{tasks.frequency}</div>*/}

                                </tr>
                            )}
                        </table>
                    </div>
                </div>
            </div>
                );
                }
                }

                export default List_Tasks;