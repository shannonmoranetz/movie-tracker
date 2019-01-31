export const showLoginPromptReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGIN_PROMPT':
      return action.validity
    default: 
      return state;
  } 
}