import { apiGetStream } from "../../services/streamService";
import actionType from "./actionType";

export const getStream = () => async (dispatch) => {
  try {
    let response = await apiGetStream();

    if (response?.success) {
      const filter = response?.ads?.filter(f => f?.root_domain === "sovo.link")?.map(el => {
        return el
      })
      dispatch({
        type: actionType.GET_BANNER,
        currentData: filter,
      });
    } else {
      dispatch({
        type: actionType.GET_BANNER,
        currentData: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_BANNER,
      currentData: null,
      msg: error,
    });
  }
};
