import React, {Component} from 'react';
import Chart_Pie from "../../Components/Charts/__pie/Pie";
import ChartPieew from "../../Components/Charts/ChartPieew";
const labels = ['Ваш прогресс', 'Ваш потенциал',];
const colors = ['#2fc552', '#9db7c4',];


class Testchart extends Component {
    constructor() {
        super();
        this.state = {
            points:[]
        }
    }
    yt() {
        var rr = this.state.points.points;
        var jj = +rr;
        return jj;

    }
    componentDidMount() {
        fetch('/points')
            .then(res => res.json())
            .then(points => this.setState({ points }));
    }
    render() {
        return (
            <div>
                <ChartPieew labels={labels} data={ [this.yt(),100]} colors={colors}/>
            </div>
        );
    }
}

export default Testchart;