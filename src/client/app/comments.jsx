import React from 'react';

class Comments extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <ul className="component">
           <h1>Comments</h1>
           {this.props.data.map(comment =>
            <li key={comment.id}>{comment.name}</li>
            )} 
        </ul>
        )
    }
}

export default Comments;