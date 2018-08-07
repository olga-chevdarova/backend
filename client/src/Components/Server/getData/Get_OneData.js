import React, {Component} from 'react';

class Get_OneData extends Component {
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
                {this.state.tasks.points}
            </table>
        );
    }
}

export default Get_OneData;