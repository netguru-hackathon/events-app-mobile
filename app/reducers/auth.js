const defaultState = {
  isAppInitialized: false,
  isAppInitializing: false,
  isFetchingAccessToken: false,
  isAccessTokenValid: false,
};

export default function auth(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
