
import React, { useState } from "react";
import axios from "axios";

export default function InputForm({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let endpoint = isSignUp ? "signUp" : "login";

    try {
      const res = await axios.post(`http://localhost:5000/${endpoint}`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setIsOpen();
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div style={styles.fullscreen}>
      <form style={styles.card} onSubmit={handleOnSubmit}>

        <h2 style={styles.title}>
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={styles.error}>{error}</p>}

        <button style={styles.button}>
          {isSignUp ? "Sign Up" : "Login"}
        </button>

        <p style={styles.toggle} onClick={() => setIsSignUp(p => !p)}>
          {isSignUp ? "Already have account? Login" : "Create new account"}
        </p>

      </form>
    </div>
  );
}

const styles = {
  fullscreen: {
    position: "fixed",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#FFF3E6",
    zIndex: 9999,
    padding: "15px"
  },

  card: {
    background: "#fff",
    padding: "35px 25px",
    width: "100%",
    maxWidth: "360px",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,.12)"
  },

  title: {
    color: "#FF6B00",
    marginBottom: "22px",
    fontWeight: "600",
    fontSize: "22px"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "14px"
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#FF6B00",
    color: "#fff",
    border: "none",
    borderRadius: "7px",
    cursor: "pointer",
    marginTop: "5px",
    fontSize: "15px"
  },

  toggle: {
    marginTop: "15px",
    color: "#FF6B00",
    cursor: "pointer",
    fontSize: "13px"
  },

  error: {
    color: "red",
    fontSize: "13px",
    marginBottom: "5px"
  }
};
