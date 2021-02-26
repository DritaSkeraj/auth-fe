import React, { useCallback, useEffect, useState } from "react";
import backend from "../../clients/axios";
import { useHistory } from "react-router-dom";
const useAuth = () => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = useCallback(async () => {
    try {
      const { data } = await backend.get("/users/me");
      setUser(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, [setUser, setLoading]);
  const logout = async () => {
    try {
      localStorage.clear();
      history.push("/auth/login");
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return [user, loading, fetchUser, logout];
};

export default useAuth;
