import api from './api';

export const create = (data) => {
  return api.post('/projects', data);
};
