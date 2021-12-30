import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

// init context
const GithubContext = createContext();

// api url & token
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async text => {
    setLoading();
    const params = new URLSearchParams({ q: text });
    const res = await fetch(`${GITHUB_URL}/search/users/${params}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });
    const { items } = await res.json();
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
