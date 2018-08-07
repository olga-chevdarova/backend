import React, {Component} from 'react';
import {Pie, defaults} from 'react-chartjs-2';


{/*<Chart_Pie labels={["Первй", "djlhk"]} data={[300, 50]} colors={['#FF6384','#36A2EB']}/>*/}

class ChartPieew extends Component {
    render() {
        const data = {
            labels: this.props.labels,
            datasets: [
                {
                    data: this.props.data,
                    backgroundColor: this.props.colors,
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                    ,



                }],


        };
        return (
            <Pie  data={data} />
        );
    }
}

export default ChartPieew;