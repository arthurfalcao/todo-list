import api from './api';

export const login = (data) => {
  return api.post('/login', data);
};

export const signUp = (data) => {
  return api.post('/signup', data);
};
