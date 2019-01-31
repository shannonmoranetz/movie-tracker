export const currentMovieReducer = (state = '', action) => {
  switch (action.type) {
    case 'CLICKED_MOVIE':
      return action.movie;
    default:
      return state;
  }
}