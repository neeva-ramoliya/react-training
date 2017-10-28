import React from 'react';
import Reflux from 'reflux';
import {render} from 'react-dom';
import TODOList from './todoList.jsx';
import ItemForm from './itemForm.jsx';
import TodoActions from '../actions/todoActions';
import TodoStore from '../stores/todoStore';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: TodoStore.getInitialState()};
        this.onUpdate = this.onUpdate.bind(this);       
    }
   
    componentDidMount() {
        this.subscirber = TodoStore.listen(this.onUpdate);
    }

    onUpdate(items) {
        this.setState({
            items: items
        })
    }

    render() {
    
        return (
            <div className ="container">
                <h3 className="page-header"> Todo App </h3>
                <ItemForm />
                <TODOList items = {this.state.items}  />
            </div>
        )
    }
}


render(<App/>, document.getElementById("app"));



