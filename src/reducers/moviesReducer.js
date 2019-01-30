export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [ ...state, action.movie];
    default:
      return state;
  }
}