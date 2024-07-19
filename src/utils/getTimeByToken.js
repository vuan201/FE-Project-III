import { jwtDecode } from "jwt-decode";

export function getTimeByToken(token) {
  const deCode = jwtDecode(token);
  if (deCode && deCode.exp && deCode.iat) {
    return deCode.ia - deCode.exp;
  } else {
    return 3600;
  }
}
