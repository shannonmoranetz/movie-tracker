import { showLoginPromptReducer } from '../showLoginPromptReducer';
import * as actions from '../../actions/index';

describe('showLoginPromptReducer', () => {
  it('should return the initial state', () => {
    const expected = false;
    const result = showLoginPromptReducer(undefined, false);
    expect(result).toEqual(expected);
  });

  it('should return logged in/out state with a boolean', () => {
    const result = showLoginPromptReducer(undefined, actions.toggleLoginPrompt(false));
    expect(result).toEqual(false);
  });
});