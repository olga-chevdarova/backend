import React, {Component} from 'react';
import Chart_Pie from "../../Components/Charts/__pie/Pie";
import Idea from "./Idea";
import IndexChart from "./IndexChart";
import Testchart from "../TestPage/Testchart";
import TestPhysical from "../TestPage/TestPhysical";
import TestPage from "../TestPage/TestPage";
import List_Tasks from "../../Components/Lists/Tasks/List_tasks";
import PolarChart from "../../Components/Charts/PolarChart";
import RadarChart from "../../Components/Charts/RadarChart";
import PieChart from "../../Components/Charts/PieChart";
import Testing_Quiz from "../../Components/Testing/Quiz";
import Get_OneData from "../../Components/Server/getData/Get_OneData";
import Get_ArrayData from "../../Components/Server/getData/Get_ArrayData";



class IndexPage extends Component {
    constructor() {
        super();
        this.state = {
            activeComponent: <Idea/>,
            button: 'btn_start',
            chartClass: 'flex-chart'

        };
    }
    changeContent() {
        this.setState({
            activeComponent:<List_Tasks url="/new2"/>,
            button: ' btn_start hide',
            chartClass: 'flex-chart hide'
        })
    }
    render() {
        return (
            <div className="container">
                <nav>
                    <a href="">Home</a>
                    <a href=""></a>
                </nav>
                <div className="flex">
                    <div className={this.state.chartClass} >
                        {/*<PolarChart*/}
                        {/*labels={['Карьера', 'Отношения', 'Финансы', 'Здоровье', 'Отдых', 'Личн рост', 'Физ. окруж', 'Имидж']}*/}
                        {/*data={[100, 100, 100, 100, 100, 100, 100, 100]}*/}
                        {/*colors={['rgba(18, 137, 167,0.85)', 'rgba(234, 32, 39,0.85)', 'rgba(163, 203, 56,0.85)', 'rgba(0, 148, 50,0.85)', 'rgba(247, 159, 31,0.85)', 'rgba(87, 88, 187,0.85)', 'rgba(196, 229, 56,0.85)', 'rgba(18, 203, 196,0.85)']}*/}
                        {/*legend = 'true'*/}
                        {/*legendPosition = "bottom"*/}
                        {/*dataLabels = 'true'/>*/}
                        <PieChart data={[5, 20]} backgroundColors = {['rgba(5, 196, 107,1.0)', 'rgba(128, 142, 155,0.3)']} labels={['Ваш прогресс', 'Ваш потенциал']} datalabels={'true'} />
                        <div className="btn_wrap">
                            <button className={this.state.button} onClick={this.changeContent.bind(this)}>Вперед!</button>
                        </div>
                    </div>
                   {/*<Get_OneData url="/points"/>*/}
                    {/*<Get_ArrayData  url="/new2"/>*/}
                    <Testing_Quiz/>

                </div>
            </div>
        );
    }
}

export default IndexPage;