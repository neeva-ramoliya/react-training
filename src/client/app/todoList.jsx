import React from 'react';
import ListItem from './listItem.jsx';

class TODOList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items : props.items}
        this.removeItemFromList = this.removeItemFromList.bind(this);
        this.changeItem = this.changeItem.bind(this);
    }

    componentWillMount() {
         var listItems = this.state.items.map((item, index) => {
                 return <ListItem id={index} value={item} removeItem={this.removeItemFromList} />
              }
        )
        this.setState({
            listItems: listItems
        })    
    }

    removeItemFromList(itemToRemove) { 
        var updatedItems = this.state.items.filter((item, index) => { return index != itemToRemove.state.id });
        this.props.updateParent(updatedItems);
    }

    changeItem(itemToUpdate) {
        var updatedItems = this.state.items.map((item,index) => {
                if (index == itemToUpdate.state.id) {
                  return  item = itemToUpdate.state.value;
                } else {
                    return item;
                }
         });
        this.props.updateParent(updatedItems);
    }

    componentWillReceiveProps(newProps) {
        var listItems = newProps.items.map((item, index) => {
                 return <ListItem  key= {index} id={index} value={item} removeItem={this.removeItemFromList} changeItem={this.changeItem} />
              }
        )
        this.setState({
            listItems: listItems,
            items: newProps.items
        })  
    }

    render() {  
        return (
            <ul className="list-group todo-list">
                {this.state.listItems}
            </ul>
        )
    }
}

export default TODOList; 