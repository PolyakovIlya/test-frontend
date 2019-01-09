import api from './api';

const login = (username, password) => {
    return api.post(`/users/login`, {user:{username, password}})
        .then(user => {
            if (user.token) {
                localStorage.setItem('user', JSON.stringify({
                    username: user.username,
                    isAdmin: user.isAdmin,
                    email: user.email,
                    token: user.token
                }));
            }
            return user;
        });
};

const register = (data) => {
    return api.post(`/users/register`, {user: data})
        .then(user => {
            return user;
        });
};

const logout = () => {
    localStorage.removeItem('user')
};

export const userService = {
    login,
    register,
    logout
};
