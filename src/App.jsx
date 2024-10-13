import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Design from "./components/Design";

function App() {
  return (
    <div>
      <Header />
      <div className="w-full md:flex">
        <Form />
        <Design />
      </div>
    </div>
  );
}

export default App;
