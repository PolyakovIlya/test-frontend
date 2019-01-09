import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './alert';
import history from '../store/history';

const login = (username, password) => {
    const request = (user) => ({ type: userConstants.LOGIN_REQUEST, user });
    const success = (user) => ({ type: userConstants.LOGIN_SUCCESS, user });
    const failure = (error) => ({ type: userConstants.LOGIN_FAILURE, error });

    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    user.isAdmin ? history.push('/admin') : history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.addAlert('error', error));
                }
            );
    };
};

const logout = () => {
    return dispatch => {
        dispatch({type: userConstants.LOGOUT});

        userService.logout();
        history.push('/login');
    };
};

const register = (data) => {
    const request = (user) => ({ type: userConstants.LOGIN_REQUEST, user });
    const success = (user) => ({ type: userConstants.LOGIN_SUCCESS, user });
    const failure = (error) => ({ type: userConstants.LOGIN_FAILURE, error });

    return dispatch => {
        dispatch(request(data));

        userService.register(data)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/login');
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };
};

export const userActions = {
    login,
    register,
    logout
};
