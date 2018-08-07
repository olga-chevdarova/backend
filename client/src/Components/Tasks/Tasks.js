import React, {Component} from 'react';

class Tasks extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            url: ''
        }
    }

    changeUrl(url) {
        this.setState((prevState, props) => ({
            url:url
        }),() => {
            this.updateFromServer()
        });
    }
    componentDidMount() {
        this.changeUrl(this.props.url)
    }

    updateFromServer() {
        fetch(this.state.url)
            .then(res => res.json())
            .then(data => this.setState({data}));
    }


    render() {
        return (
            <table>

                {this.state.data.map(tasks =>
                    <tr key={tasks.id}>
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

export default Tasks;