import React from "react";
import UI1 from "./layouts/UI1/UI1";
import UI2 from "./layouts/UI2/UI2";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-5 py-12">
        <h1>UI 1</h1>
        <hr></hr>
        <UI1></UI1>
        <h1>UI 2</h1>
        <hr></hr>
        <UI2></UI2>
      </div>
    </div>
  );
};

export default App;
