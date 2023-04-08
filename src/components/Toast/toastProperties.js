import checkIcon from "../../assets/check.svg";
import errorIcon from "../../assets/error.svg";
import infoIcon from "../../assets/info.svg";
import warningIcon from "../../assets/warning.svg";

export const TOAST_PROPERTIES = {
  success: {
    title: "Success",
    backgroundColor: "#5cb85c",
    icon: checkIcon,
  },
  error: {
    title: "Error",
    backgroundColor: "#d9534f",
    icon: errorIcon,
  },
  info: {
    title: "Info",
    backgroundColor: "#5bc0de",
    icon: infoIcon,
  },
  warning: {
    title: "Warning",
    backgroundColor: "#f0ad4e",
    icon: warningIcon,
  },
};

export const genToastNotification = (type, description) => ({
  ...TOAST_PROPERTIES[type],
  id: Math.floor(Math.random() * 101 + 1),
  description,
});
