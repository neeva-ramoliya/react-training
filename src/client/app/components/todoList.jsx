import React from 'react';
import ListItem from './listItem.jsx';

class TODOList extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {  
        var listItems = this.props.items.map((item, index) => {
                 return <ListItem  key= {index} id={index} value={item} />
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