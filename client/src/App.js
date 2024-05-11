import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// const { REACT_APP_BACKEND_URL } = process.env;

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(process.env.REACT_APP_BACKEND_URL);
      console.log(data);
      const { name } = data;
      setValue(name);
    };
    getData();
  }, []);

  return <div className="App">Hello {value}</div>;
}

export default App;
