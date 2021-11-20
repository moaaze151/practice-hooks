import "./App.css";
import Header from "./component/Header";
import Login from "./component/Login";
import { useContext, useReducer, useState } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import useInc from "./customHooks/IncHook";

function counterReducer(st, ac) {
  if (ac === "INCREMENT") {
    return st + 1;
  }
  if (ac === "DECREMENT") {
    return st - 1;
  }
  if (ac.type === "DECREMENTBY3") {
    return st + ac.payload;
  }
  throw new Error(ac + "Isn't Defined In Count Reducer.");
}


function App() {
  const [count, dispatch] = useReducer(counterReducer, 0);
  const { num, incNum, decNum } = useInc();
  const authContext = useContext(AuthContext);
  return (
    <div className="container">
      <Header />
      <div>{authContext.auth.email ? "Welcome" : <Login />}</div>
      <div className="bg-light p-3 my-2">
        <h2>useReducer:</h2>
        <h6>count: {count}</h6>
        <button
          className="btn btn-danger me-2"
          onClick={() => dispatch("INCREMENT")}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch("DECREMENT")}
        >
          Decrement
        </button>
        <button
          className="btn btn-danger my-3 d-block"
          onClick={() => dispatch({ type: "DECREMENTBY3", payload: 3 })}
        >
          Decrement BY 3
        </button>
      </div>
      <div className="bg-light p-3 my-2">
        <h2>Custom Hooks:</h2>
        <h6>Number: {num}</h6>

        <button className="btn btn-info me-2" onClick={() => incNum()}>
          +1
        </button>
        <button className="btn btn-info me-2" onClick={() => decNum()}>
          -1
        </button>
      </div>
    </div>
  );
}
function AppWithStore() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
export default AppWithStore;
