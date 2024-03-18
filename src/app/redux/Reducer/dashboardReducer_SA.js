import { ActionType } from "../Action-type/ActionType";

const initialState = {
  isLoading: false,
  msg: "",
  resourcesCount: '',
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_RESOURCES_COUNT_PENDING:
      return {
        ...state,
        isLoading: true,
        msg: "",
      };
    case ActionType.GET_RESOURCES_COUNT_SUCCESS:
      return {
        ...state,
        resourcesCount: action.payload ?? '',
        isLoading: false,
        msg: action.msg,
      };
    case ActionType.GET_RESOURCES_COUNT_FAILURE:
      return {
        ...state,
        msg: action.msg,
        isLoading: false,
      };


    default:
      return state;
  }
};
