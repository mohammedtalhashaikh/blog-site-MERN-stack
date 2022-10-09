import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const signOutUser = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      {error && <p className="error">{error}</p>}
      <button className="logout" onClick={signOutUser}>
        Logout
      </button>
    </>
  );
};

export default Logout;
