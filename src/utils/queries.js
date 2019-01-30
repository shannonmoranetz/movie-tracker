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
    return Error('Error creating user: ' + error.message);
  }
}

// 1. method to fetch all users 
// 2. method to compare users and return the matching one (called from onSubmit)
// 3. email, pw from matching user passed through to loginUser

export const loginUser = async (email, password) => {
  console.log('fire')
  try {
    // let user = users.filter(user => {
    //   return user.email === email && password;
    // });
    return await postData('', {
      method: 'POST',
      body: JSON.stringify({ email, password }), // stringify the matching email + pw
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return Error('Error logging in: ' + error.message);
  }
}

