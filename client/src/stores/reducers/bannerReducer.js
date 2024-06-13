import actionType from "../actions/actionType";

const initState = {
  bannerData: {},
};

const bannerReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_BANNER:
      return {
        ...state,
        bannerData: action.currentData || {},
      };
    default:
      return state;
  }
};
export default bannerReducer;
