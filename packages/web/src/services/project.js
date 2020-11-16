import api from './api';

export const create = (data) => {
  return api.post('/projects', data);
};

export const getAll = () => {
  return api.get('/projects');
};

export const remove = (id) => {
  return api.delete(`/projects/${id}`);
};
