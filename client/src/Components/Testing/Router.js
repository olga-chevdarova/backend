import React, {Component} from 'react';

class Router extends Component {
    constructor() {
        super();

        this.state= {
            data: [],
            url: '/router'
        }}

    updateFromServer() {
        fetch(this.state.url)
            .then(res => res.json())
            .then(data => this.setState({data}));
    }

    change(url) {
        this.setState((prevState, props) => ({
            url:url
        }),() => {
            this.updateFromServer()
        });
    }

    render() {
        return (
            <div>
                {this.state.url}
                <ul>
                    {this.state.data.map(data =>
                        <li key={data.id}>
                            {data.desc}
                        </li>
                    )}
                </ul>
                <button  type="button" onClick={this.change.bind(this, '/router2')}>OK</button>
                <button  type="button" onClick={this.change.bind(this, '/router3')}>OK</button>
            </div>
        );
    }
}

export default Router;