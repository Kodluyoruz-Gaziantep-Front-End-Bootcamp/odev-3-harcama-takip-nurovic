export default (state, action) => {
    switch(action.type) {
      case 'ADD_EXPENCE':
        return {
          ...state,
          expence: [action.payload, ...state.expence]
        }

      default:
        return state;
    }
  }