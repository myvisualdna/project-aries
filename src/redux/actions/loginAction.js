function loginAction(authUser) {
  console.log();
  return {
    type: "SET_USER",
    payload: authUser,
  };
}

export default loginAction;
