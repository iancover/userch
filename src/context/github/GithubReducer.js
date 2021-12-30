const githubReducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'GET_USERS':
      return {
        ...state,
        users: payload,
        loading: false
      }

    default:
      return state;
  }
};

export default githubReducer;
