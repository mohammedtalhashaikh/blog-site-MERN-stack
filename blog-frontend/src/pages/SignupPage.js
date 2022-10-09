import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Password and confirm password do not match");
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/article-list");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h2>Sign updatedArticle</h2>
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
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Re-enter Your password"
      />
      <button onClick={signup}>Sign up</button>
      <Link to="/login">Already have an account? Log In here</Link>
    </>
  );
};

export default LoginPage;
