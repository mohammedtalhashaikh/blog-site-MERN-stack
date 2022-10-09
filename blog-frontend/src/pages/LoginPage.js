import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/article-list");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h2>Log In</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your password"
      />
      <button onClick={login}>Log In</button>
      <Link to="/signup">Don't have an account? Create one here</Link>
    </>
  );
};

export default LoginPage;
