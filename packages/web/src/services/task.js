import api from './api';

export const create = (data) => {
  return api.post('/tasks', data);
};

export const update = (id, data) => {
  return api.put(`/tasks/${id}`, data);
};

export const get = (id) => {
  return api.get(`/tasks/${id}`);
};

export const finish = (id) => {
  return api.put(`/tasks/${id}/finish`);
};

export const unfinish = (id) => {
  return api.put(`/tasks/${id}/unfinish`);
};

export const remove = (id) => {
  return api.delete(`/tasks/${id}`);
};
