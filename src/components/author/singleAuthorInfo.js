import React from "react";
import Map from "../common/Map";


class SingleAuthorInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: {
                username: "Loading...",
                email: "Loading...",
                phone: "Loading...",
                name: "Loading...",
                address: {
                    street: "Loading...",
                    zipcode: "Loading..."
                },
                company: {
                    name: "Loading",
                    catchPhrase: "Loading"
                }
            },
        };
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    authors: result
                });
            });
    }

    render() {
        return (<div className="container">
            <p onClick={this.props.history.goBack} className="waves-effect waves-light btn"> Back </p>
            <div className="row">
                <div className="col s6">
                    <img alt="authorpic" className="authImg" src="https://i.ytimg.com/vi/R8Wzhj4RRRo/hqdefault.jpg" />
                </div>
                <div className="col s6">
                    <h5 style={{ textAlign: "center", marginBottom: "20px" }}>{this.state.authors.name} </h5>
                    <p style={{ textAlign: "center" }}>User Name : {this.state.authors.username} </p>
                    <p style={{ textAlign: "center" }}>Email : {this.state.authors.email} </p>
                    <p style={{ textAlign: "center" }}>Phone : {this.state.authors.phone} </p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col s6">
                    <h2 style={{ textAlign: "center" }}>Address</h2>
                    <p style={{ textAlign: "center" }}>Street : {this.state.authors.address.street} </p>
                    <p style={{ textAlign: "center" }}>ZipCode : {this.state.authors.address.zipcode} </p>
                </div>
                <div className="col s6">
                    <Map geo={this.state.authors.address.geo} />
                </div>
                <hr />
            </div>
            <div className="row">
                <div className="col s9">
                    <h2 style={{ textAlign: "center" }}>Company</h2>
                    <p style={{ textAlign: "center" }}>Name : {this.state.authors.company.name} </p>
                    <p style={{ textAlign: "center" }}>Catch Phrase : {this.state.authors.company.catchPhrase} </p>
                </div>
            </div>
        </div>
        );
    }
}
export default SingleAuthorInfo;

