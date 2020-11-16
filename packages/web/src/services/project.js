import api from './api';

export const create = (data) => {
  return api.post('/projects', data);
};

export const getAll = () => {
  return api.get('/projects');
};

export const get = (id) => {
  return api.get(`/projects/${id}`);
};

export const update = (id, data) => {
  return api.put(`/projects/${id}`, data);
};

export const remove = (id) => {
  return api.delete(`/projects/${id}`);
};
