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

  const fetchUsers = async () => {
    setLoading();
    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });
    const data = await res.json();
    dispatch({ 
      type: 'GET_USERS', 
      payload: data 
    });
  };

  const setLoading = () => dispatch({type: 'SET_LOADING'});

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
