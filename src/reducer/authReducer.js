export const initialAuthState = {
  key: "",
  user: {},
  loading: false,
  error: "",
  page: "",
};

export const reducerAuth = (initialAuthState, action) => {
  switch (action.type) {
    case "START":
      return { ...initialAuthState, loading: true };
    case "SUCCESS":
      return {
        ...initialAuthState,
        key: action.payload.key,
        user: action.payload.user,
        loading: false,
        page: action.payload.page,
      };
    case "FAIL":
      return {
        ...initialAuthState,
        error: action.payload,
        loading: false,
      };
    default:
      break;
  }
};
