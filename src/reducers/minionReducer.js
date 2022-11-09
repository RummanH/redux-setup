const minionReducer = (state = { minions: [1, 2, 3] }, action) => {
  switch (action.type) {
    case "ADD_MINION":
      return { minions: [...state.minions, action.payload] };
    default:
      return state;
  }
};

export default minionReducer;
