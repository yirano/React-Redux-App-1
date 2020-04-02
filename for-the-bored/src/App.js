import React from "react";
import axios from "axios";

function App() {
  axios
    .get("https://api.covid19api.com/dayone/country/us/status/confirmed")
    .then(res => console.log(res))
    .catch(err => console.log(err));
  return <div className="App"></div>;
}

export default App;
