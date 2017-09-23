import React from 'react';
import TodoActions from '../actions/todoActions';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            isEditing: false
        }
        this.removeItem = this.removeItem.bind(this);
        this.editClickHandler = this.editClickHandler.bind(this);
        this.stopEditing = this.stopEditing.bind(this);
        this.onItemChange = this.onItemChange.bind(this);
    }

    removeItem(e) {
        TodoActions.itemRemove(this.props.id);
    }

    editClickHandler(e) {
        this.setState({
            isEditing: true
        })
    }

    onItemChange(e) {
       this.setState({
           value: e.target.value
        });
    }

    stopEditing() {
        this.setState({
            isEditing: false
        })
       TodoActions.itemChange(this.props.id, this.itemInput.value);
    }
    render() {
        return (
            <li className= { this.state.isEditing ? 'editing todo-item': 'todo-item'} onDoubleClick= {this.editClickHandler}>
                <input value= {this.state.value} ref= {(input) => { this.itemInput = input; }} className="item-input-field form-control" onChange={this.onItemChange} onBlur={this.stopEditing}/>
                <label className="item-label form-control">{this.props.value}</label>
                <button className="close close-button" onClick={this.removeItem}>
                    <span>&times;</span>
                </button>
            </li>
        )
    }
}

export default ListItem; 