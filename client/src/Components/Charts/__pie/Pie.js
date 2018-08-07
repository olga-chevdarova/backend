import React, {Component} from 'react';
import {Polar, defaults} from 'react-chartjs-2';
import datalabels from 'chartjs-plugin-datalabels';
// defaults.global.legend.display = false;

defaults.global.plugins.datalabels.display = false;

defaults.global.plugins.datalabels.formatter= function(value, context) {
    return context.chart.data.labels[context.dataIndex];
};
{/*<Chart_Pie labels={["Первй", "djlhk"]} data={[300, 50]} colors={['#FF6384','#36A2EB']}/>*/}

class Chart_Pie extends Component {
    render() {
        const data = {
            labels: this.props.labels,
            datasets: [
                {
                    data: this.props.data,
                    backgroundColor: this.props.colors,
                    options: {
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    }
                    ,

                    plugins: {
                        datalabels: {
                            color: 'white'
                        }
                    }


                }],


        };
        return (
            <Polar
                width={100}
                options={{
                    maintainAspectRatio: true,
                    plugins : {
                        datalabels :{
                            display:true,
                            color: 'white',
                            align: 'end',
                            offset: 10,
                            font: {
                                size: 14
                            }

                        }
                    }
                }}
                legend ={{position: 'bottom'}}
                data={data} />
        );
    }
}

export default Chart_Pie;