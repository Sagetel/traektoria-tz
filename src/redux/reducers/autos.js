const initialState = []
const autosReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ALL_AUTOS':
      return action.payload
    case 'SORT_AUTOS':
      let newValue;
      switch (action.payload.sortBy) {
        case 'year_asc':
          newValue = [...state].sort((a, b) => b.year - a.year);
          return newValue;
        case 'year_desc':
          newValue = [...state].sort((a, b) => a.year - b.year);
          return newValue;
        case 'price_asc':
          newValue = [...state].sort((a, b) => b.price - a.price);
          return newValue;
        case 'price_desc':
          newValue = [...state].sort((a, b) => a.price - b.price);
          return newValue;
        default:
          return state;
      }
    case 'DELETE_BY_ID':
      return state.filter(auto => auto.id !== action.payload);
    case 'UPDATE_AUTO':
      const updatedAuto = action.payload;
      const updatedState = state.map(auto =>
        auto.id === updatedAuto.id ? updatedAuto : auto
      );
      return updatedState;
    default:
      return state;
  }
};
export default autosReducers;