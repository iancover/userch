import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export const searchUsers = async text => {
  const params = new URLSearchParams({ q: text });
  const res = await github.get(`/search/users?${params}`);
  return res.data.items;
};

export const getUser = async login => {
  const res = await github.get(`/users/${login}`);
  return res.status === 404 ? (window.location = '/notfound') : res.data;
};

export const getUserRepos = async login => {
  const params = new URLSearchParams({ sort: 'created', per_page: 10 });
  const res = await github.get(`/users/${login}/repos?${params}`);
  return res.data;
};
