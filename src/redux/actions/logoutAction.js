function logoutAction() {
  console.log();
  return {
    type: "SET_USER",
    payload: null,
  };
}

export default logoutAction;
