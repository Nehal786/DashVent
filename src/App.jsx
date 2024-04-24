import React, { useState } from "react";
import "./App.css";
import SuperParent from "./components/SuperParents";
import data from "./utils/Constants";

const App = () => {
  return (
    <div className="App">
      <SuperParent data={data} name={data.name} children={data.children} />
    </div>
  );
};

export default App;
