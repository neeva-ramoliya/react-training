import React from 'react';
import ListItem from './listItem.jsx';

class TODOList extends React.Component {
    constructor(props) {
        super(props);
        this.removeItemFromList = this.removeItemFromList.bind(this);
    }

    componentWillMount() {
         var listItems = this.props.items.map((item, index) => {
                 return <ListItem id={index} value={item} removeItem={this.removeItemFromList} />
              }
        )
        this.setState({
            listItems: listItems
        })    
    }

    removeItemFromList(itemToRemove) { 
        this.props.updateList(itemToRemove);
    }

    componentWillReceiveProps(newProps) {
        var listItems = newProps.items.map((item, index) => {
                 return <ListItem id={index} value={item} removeItem={this.removeItemFromList} />
              }
        )
        this.setState({
            listItems: listItems
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