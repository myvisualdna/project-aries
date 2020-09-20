function addToBasket(MyInfo) {
  console.log(MyInfo);
  return {
    type: "ADD_TO_BASKET",
    payload: {
      id: MyInfo.id,
      title: MyInfo.title,
      image: MyInfo.image,
      price: MyInfo.price,
      rating: MyInfo.rating,
    },
  };
}

export default addToBasket;
