const initialState = {
  preferiti: {
    aziendepreferite: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PREFERITO":
      return {
        ...state,
        preferiti: {
          ...state.preferiti,
          //   aziendepreferite: [
          //     ...state.preferiti.aziendepreferite,
          //     action.payload,
          //   ],
          aziendepreferite: state.preferiti.aziendepreferite.concat(
            action.payload
          ),
        },
      };
    case "REMOVE_PREFERITO":
      return {
        ...state,
        preferiti: {
          ...state.preferiti,
          aziendepreferite: state.preferiti.aziendepreferite.filter(
            (azienda, index) => {
              if (index !== action.payload) {
                return true;
              } else {
                return false;
              }
            }
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
