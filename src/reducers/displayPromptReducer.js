export const displayPromptReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGIN_PROMPT':
      return !state
    default: 
      return state;
  } 
}