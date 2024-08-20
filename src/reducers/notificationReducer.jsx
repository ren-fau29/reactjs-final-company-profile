import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from "../actions/notificationActions";

const initialState = {
  visible: false,
  message: "",
  notificationType: "", // e.g., 'success', 'error', 'info'
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        visible: true,
        message: action.payload.message,
        notificationType: action.payload.notificationType,
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        visible: false,
        message: "",
        notificationType: "",
      };
    default:
      return state;
  }
};

export default notificationReducer;
