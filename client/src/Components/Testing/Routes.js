import React, {Component} from 'react';

class Routes extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            url: '/data',
            id: ''

        }
    }

    componentDidMount() {
        this._mounted = true
            fetch(this.state.url)
                .then(res => res.json())
                .then(data => this.setState({data}));


    }


    change() {
        this.setState({
            url: '/data2'
        });
    }

    change2() {
        if (this._mounted) {
            this.setState({
                url: '/town/2'
            });
            this.lol();
        }
    }

    lol() {
        fetch(this.state.url)
            .then(res => res.json())
            .then(data => this.setState({data}));

    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map(data =>
                        <li>
                            {data.town}
                            {data.desc}
                        </li>
                    )}
                </ul>
                <button onClick={this.change.bind(this)}>change</button>
                <button onClick={this.change2.bind(this)}>change</button>
                <br/>
                <ul>
                    {this.state.data.map(data =>
                        <li key={data.id}>
                            {data.desc}
                        </li>
                    )}
                </ul>

            </div>
        );
    }
}

export default Routes;