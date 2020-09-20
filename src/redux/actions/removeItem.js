function removeItem(DaData) {
  console.log();
  return {
    type: "REMOVE_FROM_BASKET",
    payload: {
      id: DaData.id,
    },
  };
}

export default removeItem;
