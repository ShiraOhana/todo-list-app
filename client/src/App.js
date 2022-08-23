import "./App.css";
import axios from "axios";
import { api } from "./API/api";

function App() {
  function handleResponse(response) {
    console.log(response);
  }
  const handleClick = () => {
    api.get("/users").then(handleResponse);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
