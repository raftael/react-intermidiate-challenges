export const initialState = {
    date: new Date(),    
  };
  
  export const Types = {
    SEARCH: 'SEARCH',
  };
  
  export const AppReducer = (state, action) => {
    if (!action) return state;
    switch (action.type) {
      case Types.SEARCH:
        return {
          ...state,
          date: action.value,
        };
      default:
        return state;
    }
  };
  