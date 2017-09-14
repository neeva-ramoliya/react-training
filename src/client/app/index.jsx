import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render() {
        return <h3> React App </h3>
    }
}

render(<App/>, document.getElementById("app"));