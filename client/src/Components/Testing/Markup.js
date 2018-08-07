import React, {Component} from 'react';


class Markup extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.shouldShow === true) {
            fetch(this.props.url)
                .then(res => res.json())
                .then(data => this.setState({data}));
        }

    }

    render() {
        return (
            <ul>
                {this.state.data.map(data =>
                    <li key={data.id}>
                        {data.desc}
                    </li>
                )}
            </ul>
        );
    }
}

export default Markup;