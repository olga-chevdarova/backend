import React, {Component} from 'react';
import Chart_Pie from "../../Components/Charts/__pie/Pie";

const labels = ['Карьера', 'Отношения', 'Финансы', 'Здоровье', 'Отдых', 'Личн рост', 'Физ. окруж', 'Имидж'];
const colors = ['rgba(18, 137, 167,0.85)', 'rgba(234, 32, 39,0.85)', 'rgba(163, 203, 56,0.85)', 'rgba(0, 148, 50,0.85)', 'rgba(247, 159, 31,0.85)', 'rgba(87, 88, 187,0.85)', 'rgba(196, 229, 56,0.85)', 'rgba(18, 203, 196,0.85)'];

class IndexChart extends Component {
    render() {
        return (
            <Chart_Pie labels={labels} data={[100, 100, 100, 100, 100, 100, 100, 100]} colors={colors}/>
        );
    }
}

export default IndexChart;