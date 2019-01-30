import { postData } from './api';

export const createUser = async (name, email, password) => {
  try {
    return await postData('/new', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    throw Error('Error creating user: ' + error.message);
  }
}

export const loginUser = async (email, password) => {
  try {
    return await postData('', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    throw Error('Error logging in: ' + error.message);
  }
}