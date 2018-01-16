import React from 'react'
import ReactDOM from 'react-dom'

const container = document.querySelector('.app');

class Conveter {
    static execute(string) {
        return string.toUpperCase();
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        text: '',
        };
    }
    render() {
        const {text} = this.state;
        return (
        <div>
            <input
            type="text"
            onChange={(e) => {
                this.setState({
                    text: Conveter.execute(e.target.value)
                });
            }}
            />
            <hr />
            <p>{text}</p>
        </div>
        )
    }
}
ReactDOM.render(<App />, container);