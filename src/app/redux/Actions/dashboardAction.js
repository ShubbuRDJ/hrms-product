import { getRequest } from "../../../services/axios-api-request/axios_api_Request";
import { ActionType } from "../Action-type/ActionType";

export const getResourcesCountSuperAdmin = (payload, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ActionType.GET_RESOURCES_COUNT_PENDING,
        isLoading: true,
      });


      const res = await getRequest(`dashboard/total_Resources`, payload);

      dispatch({
        type: ActionType.GET_RESOURCES_COUNT_SUCCESS,
        payload: res?.data?.result,
        isLoading: false,
        msg: res?.data?.message,
      });
    } catch (error) {
      dispatch({
        type: ActionType.GET_RESOURCES_COUNT_FAILURE,
        payload: [],
        isLoading: false,
        msg: error && error?.message,
      });
    }
  };
};


