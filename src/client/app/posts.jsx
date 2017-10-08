import React from 'react';

class Posts extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <ul className="component">
           <h1>Posts</h1>
           {this.props.data.map(post =>
            <li key={post.id}>{post.title}</li>
            )} 
        </ul>
        )
    }
}

export default Posts;