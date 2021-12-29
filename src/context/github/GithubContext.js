import { createContext, useState } from 'react';

// init context
const GithubContext = createContext();

// api url & token
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });
    const data = await res.json();
    console.log('From Context', data);
    setUsers(data);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
