import {
  SET_NAME,
  SET_EMAIL,
  SET_PHONE,
  SET_PASSWORD,
  SET_PASSWORDCOMFIRMATION,
} from "./Const";


export const setName = (payload) => {
  return {
    type: SET_NAME,
    payload,
  }
}

export const setEmail = (payload) => {
  return {
    type: SET_EMAIL,
    payload,
  }
}

export const setPhone = (payload) => {
  return {
    type: SET_PHONE,
    payload,
  }
}

export const setPassword = (payload) => {
  return {
    type: SET_PASSWORD,
    payload,
  }
}
export const setPasswordComfirmation = (payload) => {
  return {
    type: SET_PASSWORDCOMFIRMATION,
    payload,
  }
}