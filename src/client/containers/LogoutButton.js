import React from "react";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {logout} from "../actions/login";

class LogoutButton extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.dispatch = props.dispatch;
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.dispatch(logout());
    }

    getLink() {
        if (this.props.loginToken != null) {
            return <a onClick={this.logout}>Logout</a>
        }
    }

    render() {
        return (
            <div>
                {this.getLink()}
            </div>
        );
    }

}

export default withRouter(connect((state) => {
    return {loginToken: state.login.token}
})(LogoutButton));