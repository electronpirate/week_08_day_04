const pizzaToppingsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TOPPING':
      console.log(action.newTopping);
      return [
        ...state,
        action.newTopping
      ];
    default:
  return state
}
}

export default pizzaToppingsReducer;
