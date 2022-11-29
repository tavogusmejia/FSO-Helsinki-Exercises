import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const Persons = [];

const result = Persons.map((person) => person.id);
//console.log(result)

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
