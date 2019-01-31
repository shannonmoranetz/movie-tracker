export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    case 'LOGOUT_USER':
      return {};
    default: 
      return state;
  }
}