// context reducer
const githubReducer = (state, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET_USERS':
      return {
        ...state,
        users: payload,
        loading: false,
      };

    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: payload.user,
        repos: payload.repos,
        loading: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default githubReducer;
