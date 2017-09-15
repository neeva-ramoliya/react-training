import React from 'react';
import ListItem from './listItem.jsx';

class TODOList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: props.items };
        this.removeItemFromList = this.removeItemFromList.bind(this);
    }

    removeItemFromList(itemToRemove) {
        var items = this.state.items.filter((item, index) => { return item != itemToRemove.state.value });
        this.setState({
            items: items
        })
        console.log(items);
        this.render();
        // this.props.updateList(items);
    }

    render() {
        var listItems = this.state.items.map((item, index) => {
                 return <ListItem id={index} value={item} removeItem={this.removeItemFromList} />
              }
        )   
        return (
            <ul className="list-group todo-list">
                {listItems}
            </ul>
        )
    }
}

export default TODOList; 