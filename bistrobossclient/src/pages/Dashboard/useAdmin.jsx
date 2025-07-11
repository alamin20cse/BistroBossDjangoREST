import useUser from "../../Hooks/useUser";
import { useState, useEffect } from "react";

const useAdmin = () => {
  const [users, loading] = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!loading && users?.role === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [users, loading]);

  return [isAdmin, loading];
};

export default useAdmin;
