const initState = {
  authError: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return { ...state, authError: null };
    case "LOGIN_FAILED":
      console.log("Login Failed");
      return { ...state, authError: "Login failed" };
    case "SIGNOUT_SUCCESS":
      console.log("Sign Out success");
      return state;
    default:
      return state;
  }
};
