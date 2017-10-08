import React from 'react';
import {render} from 'react-dom';

import Posts from "./posts.jsx";
import Comments from "./comments.jsx";
import loadingHighOrderComponent from "./loadingHOC.jsx";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const PostComponent  = loadingHighOrderComponent(Posts, "https://jsonplaceholder.typicode.com/posts");
        const CommentComponent = loadingHighOrderComponent(Comments ,"https://jsonplaceholder.typicode.com/comments");
        return  (
        <div>
        
            <PostComponent  />
            <CommentComponent />
        </div>
        )

    }
}

render(<App/>, document.getElementById("app"));