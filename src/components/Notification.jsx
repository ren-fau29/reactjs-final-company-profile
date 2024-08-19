// components/Notification.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "../actions/notificationActions";

const Notification = () => {
  const dispatch = useDispatch();
  const { visible, message, notificationType } = useSelector(
    (state) => state.notification
  );

  if (!visible) return null;

  return (
    <div className={`notification ${notificationType}`}>
      <p>{message}</p>
      <button onClick={() => dispatch(hideNotification())}>Close</button>
    </div>
  );
};

export default Notification;
