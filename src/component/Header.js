import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaReact } from 'react-icons/fa';
export default function Header() {
  // const [person, setPerson] = useState({ fN: "Moaaz", lN: "Gamal" });
  const authContext = useContext(AuthContext);
  // function change() {
  //   const newPer = { ...person };
  //   newPer.fN = "Omaar";
  //   newPer.lN = "Hamed";
  //   setPerson(newPer);
  // }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    authContext.setAuth({});
  }
  console.log("2-child-render")
  return (
    <nav className="navbar navbar-light bg-light mt-2 mb-4">
      <div className="container-fluid">
        <h2 className="navbar-brand h1 m-0">React JS <FaReact /></h2>
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
      {/* <h1>
        {person.fN} {person.lN}
      </h1>
      <button onClick={change}>Change It</button> */}
    </nav>
  );
}
