import React from 'react';


class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            value: this.props.value
        }
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(e) {
        this.props.removeItem(this);
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
            <div key={this.state.id} className="list-group-item">
                <label>{this.state.value} </label>
                <button className="close close-button" onClick={this.removeItem}>
                    <span>&times;</span>
                </button>
            </div>
        )
    }
}

export default ListItem; 