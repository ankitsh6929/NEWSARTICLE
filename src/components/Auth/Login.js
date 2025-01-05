import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { signIn, user, signOut } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={signOut}>Logout</button>
        </div>
      ) : (
        <button onClick={signIn}>Login with Google</button>
      )}
    </div>
  );
};

export default Login;
