import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const fetchData = () => {
    if (inputValue.length > 3) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/comments?postId=${inputValue}`
        )
        .then((response) => {
          setResponse(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  return (
    <div className="input-cont">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={fetchData}>Fetch Data</button>
      {response && (
        <div className="response">
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
