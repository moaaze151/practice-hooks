import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const authContext = useContext(AuthContext);
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    authContext.setAuth({});
  }
  return (
    <nav className="navbar navbar-light bg-light mt-2 mb-4">
      <div className="container-fluid">
        <p className="navbar-brand h1 m-0">React JS</p>
        <div>
          {authContext.auth.email ? (
            <div>
              {authContext.auth.email}
              <button onClick={logout} className="btn btn-danger btn-sm">
                Logout
              </button>
            </div>
          ) : (
            <h6>You Need To login</h6>
          )}
        </div>
      </div>
    </nav>
  );
}
