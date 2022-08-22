import "./App.css";
import axios from "axios";

function App() {
  function handleResponse(response) {
    console.log(response);
  }
  const handleClick = () => {
    axios.get("http://localhost:5050/users").then(handleResponse);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
