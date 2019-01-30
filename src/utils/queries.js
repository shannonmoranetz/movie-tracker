import { postData } from './api';

export const createUser = async (name, email, password) => {
  return await postData('/new', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export const loginUser = async (email, password) => {
  return await postData('', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}