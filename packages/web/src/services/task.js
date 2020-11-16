import api from './api';

export const create = (data) => {
  return api.post('/tasks', data);
};

export const finish = (id) => {
  return api.put(`/tasks/${id}/finish`);
};

export const unfinish = (id) => {
  return api.put(`/tasks/${id}/unfinish`);
};
