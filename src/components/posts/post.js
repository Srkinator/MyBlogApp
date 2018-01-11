import React from "react";
import { Link } from "react-router-dom";

const Post = function (props) {
    return (
        <Link to={"/SinglePostInfo/" + props.postId}>
            <div className="hoverable">
                <h3>{props.title}</h3>
                <p>{props.body}</p>
            </div>
        </Link>
    );
};

export default Post;