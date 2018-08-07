import React, {Component} from 'react';
import {Polar, defaults} from 'react-chartjs-2';

defaults.global.plugins.datalabels.display = false;


{/*<PolarChart*/}
    {/*labels={['Карьера', 'Отношения', 'Финансы', 'Здоровье', 'Отдых', 'Личн рост', 'Физ. окруж', 'Имидж']}*/}
    {/*data={[100, 100, 100, 100, 100, 100, 100, 100]}*/}
    {/*colors={['rgba(18, 137, 167,0.85)', 'rgba(234, 32, 39,0.85)', 'rgba(163, 203, 56,0.85)', 'rgba(0, 148, 50,0.85)', 'rgba(247, 159, 31,0.85)', 'rgba(87, 88, 187,0.85)', 'rgba(196, 229, 56,0.85)', 'rgba(18, 203, 196,0.85)']}*/}
    {/*legend = 'true'*/}
    {/*legendPosition = "bottom"*/}
    {/*dataLabels = 'true'/>*/}


class PolarChart extends Component {
    render() {
        const data = {
            labels: this.props.labels,
            datasets: [
                {
                    data: this.props.data,
                    backgroundColor: this.props.colors,
                }],
        };
        return (
            <Polar
                width={100} options={{
                    maintainAspectRatio: true,
                    plugins : {
                        datalabels :{
                            display: this.props.dataLabels,
                            color: 'white',
                            align: 'end',
                            offset: 10,
                            font: {
                                size: 14
                            },
                            formatter: function(value, context) {
                                return context.chart.data.labels[context.dataIndex];
                            }
                        }
                    }
                }}
                legend ={{
                    display: this.props.legend,
                    position: this.props.legendPosition}}
                data={data} />
        );
    }
}

export default PolarChart;