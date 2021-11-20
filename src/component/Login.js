import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  const emailRef = useRef();
  const passRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  function onFirstInputKey(e) {
    console.log(e.key);
    if (e.key === "Enter" && email !== "") {
      passRef.current.focus();
    }
  }

  function onSecondInputKey(e) {
    console.log(e.key);
    if (e.key === "Enter" && password !== "") {
      btnRef.current.focus();
    }
  }

  function login(e) {
    e.preventDefault();
    if (email === "" || password === "") return;
    if (password === "123") {
      const token = "abc";
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      authContext.setAuth({ token, email });
    } else {
      alert("Wrong Details");
    }
  }

  return (
    <form>
      <h2>Login:</h2>
      <input
        className="form-control mb-2"
        placeholder="Email..."
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        ref={emailRef}
        value={email}
        onKeyDown={onFirstInputKey}
      />
      <input
        className="form-control"
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        ref={passRef}
        value={password}
        onKeyDown={onSecondInputKey}
      />
      <button
        ref={btnRef}
        onClick={login}
        className="btn bg-primary px-4 text-light mt-2"
      >
        Send
      </button>
    </form>
  );
}
