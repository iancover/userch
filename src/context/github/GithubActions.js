const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers = async text => {
  // remove setLoading since we're gonna dispatch directly from component
  const params = new URLSearchParams({ q: text });
  const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });
  const { items } = await res.json();
  return items;
};

export const getUser = async login => {
  const res = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });
  
  if (res.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await res.json();
    return data;
  }
};

export const getUserRepos = async login => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10
  })

  const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });
  const data = await res.json();
  return data;
};