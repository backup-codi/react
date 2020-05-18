import React from "react"; //Necesario si utilizaremos JSX
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge";

const contailer = document.getElementById("app");

ReactDOM.render(<Badge />, contailer);
