import React, { Component, Fragment } from 'react';

// function App(props) {
//     const element = <h1>This is a {props.language} element!</h1>;
//     return element;
// }

class App extends Component {
    constructor() {
        super();

        this.state = {
            text: 'some text',
            placeholder: 'Placeholder Text',
            hasLoaded: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({ hasLoaded: true });
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleClick(e) {
        this.state.hasLoaded === false ? this.setState({ hasLoaded: true }) : this.setState({ hasLoaded: false });
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <Fragment>
                    <h1>This is a {this.props.language} element which displays {this.state.text}!</h1>
                    <input placeholder={this.state.placeholder} onChange={this.handleChange} value={this.state.value} /><br />
                    <button onClick={this.handleClick}>Click Me!</button>
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <h1>Loading...</h1>
                    <button onClick={this.handleClick}>Click Me!</button>
                </Fragment>
            );
        }
    }
}

export default App;