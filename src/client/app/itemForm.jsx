import React from 'react';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: ""};
        this.addButtonHandler = this.addButtonHandler.bind(this);
        this.onItemChange = this.onItemChange.bind(this);
    }

    addButtonHandler(e) {
        this.props.addNewItem(this.state.item);
         this.setState({
            "item": ""
        });

        this.itemInput.focus();
    }

    onItemChange(e) {
        this.setState({
            "item": e.target.value
        })
    }

    render() {
        return (
            <div className = "form-inline todo-form">
                  <input type="text" className ="form-control item-input" ref = {(input) => { this.itemInput = input; }} id="item-input" onChange={this.onItemChange} value={this.state.item} />
                <button onClick={this.addButtonHandler} className  = "btn add-button"> Add </button>
            </div>
        )
    }
}

export default ItemForm;