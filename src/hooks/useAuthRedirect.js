import { useEffect } from "react";

export const useAuthRedirect = (token, status, navigate) => {
  useEffect(() => {
    if (token) navigate("/");
  }, [token, status, navigate]);
};
