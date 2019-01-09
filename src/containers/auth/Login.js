import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {username, password} = this.state;
        const {dispatch} = this.props;
        if(username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="login">
                    <p className="authHeader">Sign in</p>
                    <form name="from" className="loginForm" onSubmit={this.handleSubmit}>
                        <input type="text" className="inputForm" placeholder="Username" name="username" onChange={this.handleChange}/>
                        <input type="password" className="inputForm" placeholder="Password" name="password" onChange={this.handleChange} />
                        <button type="submit" className="button">Sign In</button>
                    </form>
                    <div className="notification-info">
                        <Link to="/register" className="link">Don't have account? Sign Up</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default Login = connect(mapStateToProps)(Login);