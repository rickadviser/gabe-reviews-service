const crudReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [action.payload, ...state];
    case 'remove':
      return state.filter(i => i !== action.payload);
    default:
      return state;
  }
};

export default crudReducer;
