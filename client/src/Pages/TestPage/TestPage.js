import React, {Component} from 'react';
import ChartPieew from "../../Components/Charts/ChartPieew";
import List_Tasks from "../../Components/Lists/Tasks/List_tasks";
const labels = ['Ваш прогресс', 'Ваш потенциал',];
const colors = ['#2fc552', '#9db7c4',];

class TestPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="flex">
                    <div className="flex-chart">
                        <ChartPieew labels={labels} data={ [52,100]} colors={colors}/>
                    </div>
                    <div className="flex-text">
                     <List_Tasks url="/new2"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestPage;