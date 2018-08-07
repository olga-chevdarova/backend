import React, {Component} from 'react';
import {Radar} from 'react-chartjs-2';

{/*<RadarChart mainLabels = {['Чистота дома', 'Качество вещей', 'Покупка новых вещей']}*/}
            {/*dataSets ={[*/}
                {/*{*/}

                    {/*label: 'Минимум',*/}
                    {/*data: [0,0,0]*/}
                {/*},{*/}
                    {/*backgroundColor : '#39e3a4',*/}
                    {/*label: 'Ваш прогресс',*/}
                    {/*data: [60, 80, 50],*/}

                {/*},*/}
                {/*{*/}
                    {/*backgroundColor : 'rgba(235, 194, 88, 0.3)',*/}
                    {/*label: 'Ваш потенциал',*/}
                    {/*data: [100,100,100]*/}
                {/*}]}*/}
{/*/>*/}

class RadarChart extends Component {
    render() {
        const data = {
            labels: this.props.mainLabels,
            datasets: this.props.dataSets
        };
        return (
            <Radar  width={100} data={data}/>
        );
    }
}

export default RadarChart;