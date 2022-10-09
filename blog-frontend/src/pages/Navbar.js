import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import { getAuth, signOut } from "firebase/auth";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/article-list">Articles</Link>
          </li>
        </ul>
        <div className="nav-right">
          {user ? (
            <button
              onClick={() => {
                signOut(getAuth());
              }}
            >
              Log Out
            </button>
          ) : (
            <button onClick={() => navigate("/login")}>Log In</button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
