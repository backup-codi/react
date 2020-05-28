import React from "react"; //Necesario si utilizaremos JSX
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

const contailer = document.getElementById("app");

ReactDOM.render(<Badges />, contailer);
