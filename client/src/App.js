import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:8000/");
      console.log(data);
      const { name } = data;
      setValue(name);
    };
    getData();
  }, []);
  return <div className="App">Hello {value}</div>;
}

export default App;
