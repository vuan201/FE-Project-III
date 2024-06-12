import {
  SET_NAME,
  SET_EMAIL,
  SET_PHONE,
  SET_PASSWORD,
  SET_PASSWORDCOMFIRMATION,
} from "./Const";

export const initValue = {
  name: "",
  phone: "",
  email: "",
  password: "",
  passwordComfirmation: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SET_PASSWORDCOMFIRMATION:
      return {
        ...state,
        passwordComfirmation: action.payload,
      };
    default:
      throw new Error("Action invalid");
  }
};

export default reducer;
