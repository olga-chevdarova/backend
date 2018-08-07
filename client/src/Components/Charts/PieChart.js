import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

{/*<PieChart data={[5, 20]} backgroundColors = {['rgba(5, 196, 107,1.0)', 'rgba(128, 142, 155,0.3)']} labels={['Ваш прогресс', 'Ваш потенциал']} datalabels={'true'} />*/}

class PieChart extends Component {

    render() {
        const data = {
            datasets: [{
                data: this.props.data,
                backgroundColor: this.props.backgroundColors
            }],
            labels: this.props.labels,
        }
        return (
            <Pie width={100} options={{
                maintainAspectRatio: true,
               
                plugins : {
                    datalabels :{
                        display: this.props.datalabels,
                        color: 'white',
                        align: 'end',
                        offset: 10,
                        font: {
                            size: 18
                        },
                        formatter: function(value, context) {
                            return  Math.round(value) + '%';
                        }
                    }
                }
            }} data={data}/>
        );
    }
}

export default PieChart;