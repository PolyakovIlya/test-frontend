import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import './Register.scss';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            isAdmin: false
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleRole = (e) => {
        this.setState((state) => ({isAdmin: !state.isAdmin}))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {dispatch} = this.props;
        dispatch(userActions.register(this.state));
    }

    render() {
        return (
            <div className="wrapper">
                <div className="register">
                    <p className="authHeader">Sign Up</p>
                    <form name="regForm" className="regForm" onSubmit={this.handleSubmit}>
                        <input type="email" placeholder="Email" className="inputForm" name="email" required onChange={this.handleChange}/>
                        <input type="text" placeholder="Username" className="inputForm" name="username" required onChange={this.handleChange}/>
                        <input type="password" placeholder="Password"  className="inputForm" name="password" required onChange={this.handleChange} />
                        <div className="editorLabel">
                            <label htmlFor="isAdmin">Editor:</label>
                            <input type="checkbox" name="isAdmin" onChange={this.handleRole} />
                        </div>
                        <button type="submit" className="button">Sign Up</button>
                    </form>
                    <div className="notification-info">
                        <Link to="/login" className="link">Already have an account? Sign in</Link>
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

export default Register = connect(mapStateToProps)(Register);