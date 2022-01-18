import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

// init context
const GithubContext = createContext();

// context provider
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
