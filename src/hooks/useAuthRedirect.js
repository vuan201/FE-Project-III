import { useEffect } from "react";

const useAuthRedirect = (token, status, navigate) => {
  useEffect(() => {
    if (token) navigate("/");
  }, [token, status, navigate]);
};

export default useAuthRedirect;
