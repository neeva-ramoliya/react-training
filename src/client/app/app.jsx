import React from 'react';
import {render} from 'react-dom';
import TODOList from './todoList.jsx';
import ItemForm from './itemForm.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.addNewItemToList = this.addNewItemToList.bind(this);
        this.updateTodoList = this.updateTodoList.bind(this);
    }

    updateTodoList(updatedItems) {
        this.setState({
            items: updatedItems
        });
        console.log(updatedItems);
        this.render(<App/>, document.getElementById("app"));
    }

    addNewItemToList(itemValue) {
        this.state.items.push(itemValue);
        this.setState({items : this.state.items});
        this.render(<App/>, document.getElementById("app"));
    }

    render() {
        return (
        <div className ="container">
            <h3 className="page-header"> Todo App </h3>
            <ItemForm addNewItem = {this.addNewItemToList} />
            <TODOList items = {this.state.items}  />
        </div>
        )
    }
}


render(<App/>, document.getElementById("app"));



