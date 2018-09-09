import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {loginRequest, registerRequest} from "../actions/login";
import {withRouter} from 'react-router-dom'

import {connect} from 'react-redux';
import {compose} from 'redux';

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class LoginMaterialUI extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        this.classes = props.classes;
        this.dispatch = props.dispatch;
        this.isRegisterForm = props.isRegisterForm;
        this.state = {
            email: "",
            password: "",
            passwordConf: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && ((this.isRegisterForm && this.state.passwordConf.length > 0) || !this.isRegisterForm);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.isRegisterForm) {
            this.dispatch(registerRequest(this.state));
        } else {
            this.dispatch(loginRequest(this.state));
        }
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className={this.classes.layout}>
                    <Paper className={this.classes.paper}>
                        <Avatar className={this.classes.avatar}>
                            <LockIcon/>
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form className={this.classes.form} onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email"
                                       value={this.state.email}
                                       onChange={this.handleChange}
                                       autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            {this.isRegisterForm &&
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="passwordConf">Password</InputLabel>
                                <Input
                                    name="passwordConf"
                                    type="password"
                                    id="passwordConf"

                                    value={this.state.passwordConf}
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            }
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                disabled={!this.validateForm()}
                                className={this.classes.submit}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        )
    }
}

LoginMaterialUI.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(compose(
    withStyles(styles),
    connect(),
)(LoginMaterialUI));