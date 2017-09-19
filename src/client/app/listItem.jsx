import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            value: this.props.value,
            isEditing: false
        }
        this.removeItem = this.removeItem.bind(this);
        this.editClickHandler = this.editClickHandler.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.stopEditing = this.stopEditing.bind(this);
    }

    removeItem(e) {
        this.props.removeItem(this);
    }

    editClickHandler(e) {
        this.setState({
            isEditing: true
        })
    }

    stopEditing() {
        this.setState({
            isEditing: false
        })
        this.props.changeItem(this);
    }

    updateItem(e) {
        this.setState({
            value: e.target.value
        })
    }

    componentWillReceiveProps(newProps) {
        if(this.props != newProps) {
            this.setState({
                id: newProps.id,
                value: newProps.value
            })
        }
    }

    render() {
        return (
            <li className= { this.state.isEditing ? 'editing todo-item': 'todo-item'} onDoubleClick= {this.editClickHandler}>
                <input value= {this.state.value} ref= {(input) => { this.itemInput = input; }} className="item-input-field form-control" onChange= {this.updateItem} onBlur={this.stopEditing}/>
                <label className="item-label form-control">{this.state.value}</label>
                <button className="close close-button" onClick={this.removeItem}>
                    <span>&times;</span>
                </button>
            </li>
        )
    }
}

export default ListItem; 