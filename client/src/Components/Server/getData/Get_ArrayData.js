import React, {Component} from 'react';

class Get_ArrayData extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
        }

    }
    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(tasks => this.setState({ tasks }));
    }


    render() {
        return (
            <table>

                {this.state.tasks.map(tasks =>

                    <tr key={tasks.id}>
                        {/*<div className="points-box">{tasks.points}</div>*/}
                        <td>
                            <input type="checkbox" value={this.state.value} id={tasks.id} className={tasks.points} onClick={this.props.onClick}/>
                        </td>
                        <td >{tasks.task}</td>
                        <td >{tasks.date}</td>
                        {/*<div>{ tasks.date}</div>*/}
                        {/*<div>{tasks.frequency}</div>*/}

                    </tr>
                )}
            </table>
        );
    }
}

export default Get_ArrayData;