export const signIn = (identity) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(identity.email, identity.password)
      .then(() => dispatch({ type: "LOGIN_SUCCESS" }))
      .catch((err) => dispatch({ type: "LOGIN_FAILED", err }));
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: "SIGNOUT_SUCCESS" }));
  };
};
