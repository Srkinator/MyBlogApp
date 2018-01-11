import React from "react";
import PostsFromSameAuthor from "../author/postsFromSameAuthor";
// import SingleAuthorInfo from "../author/singleAuthorInfo";
import { Link } from "react-router-dom";

class SinglePostInfo extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            posts: {

            },
            authors: [],
            final: {}
        };

        this.fetchPost = this.fetchPost.bind(this);
        this.displayMyPost = this.displayMyPost.bind(this);
    }

    fetchPost(postId) {
        if (this.props.match.params.id > 100) {
            this.displayMyPost();
            return null;
        }
        
        postId = this.props.match.params.id || postId;

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(result => result.json())
            .then(result => {
                this.setState((prevState, props) => ({ posts: result }));
            })
            .then((result) => {

                fetch(`https://jsonplaceholder.typicode.com/users/${this.state.posts.userId}`)
                    .then(author => author.json())
                    .then(author => {
                        this.setState({ authors: author });
                    });
            });
    }

    componentDidMount() {
        this.fetchPost();
        // this.fetchAuthor();
    }

    componentWillReceiveProps(nextProps) {
        this.fetchPost(nextProps.match.params.id);
    }

    displayMyPost() {
            let post = JSON.parse(localStorage.getItem("posts"));
            console.log(post);
            console.log(this.props.match.params.id);
            post.map((spost) => {
                if (spost.id == this.props.match.params.id) {
                    this.setState({
                        final: spost
                    });
                }
                return ;
            })
    }

    render() {
        if (this.props.match.params.id > 100) {
            return (
                <div className="container">
                    <div className="row">
                        <p onClick={this.props.history.goBack} className="waves-effect waves-light btn"> Back </p>
                        <h3 style={{ textAlign: "center" }}>{this.state.final.title} no.{this.props.match.params.id}</h3>
                        <Link to={"/SingleAuthorInfo/" + this.state.posts.userId}>
                            <h5 style={{ textAlign: "center", marginBottom: "100px" }}>{this.state.authors.name}</h5>
                        </Link>
                        <p style={{ textAlign: "center", marginBottom: "100px" }}>{this.state.final.body}</p>
                        <hr />
                        <PostsFromSameAuthor authId={this.state.posts.userId} />
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <p onClick={this.props.history.goBack} className="waves-effect waves-light btn"> Back </p>
                    <h3 style={{ textAlign: "center" }}>{this.state.posts.title} no.{this.props.match.params.id}</h3>
                    <Link to={"/SingleAuthorInfo/" + this.state.posts.userId}>
                        <h5 style={{ textAlign: "center", marginBottom: "100px" }}> by {this.state.authors.name}</h5>
                    </Link>
                    <p style={{ textAlign: "center", marginBottom: "100px" }}>{this.state.posts.body}</p>
                    <hr />
                    <PostsFromSameAuthor authId={this.state.posts.userId} />
                </div>
            </div>
        );
    }
}
export default SinglePostInfo;

