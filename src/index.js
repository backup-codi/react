import React from "react"; //Necesario si utilizaremos JSX
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge";

const contailer = document.getElementById("app");

ReactDOM.render(
  <Badge
    firsName="Alberto"
    lastName="Lopez"
    avatarUrl="https://es.gravatar.com/userimage/186397731/16bb1f1833df1ffee8d4954dc55d8f97.jpg"
    jobTitle="Forntend Engineer"
    twitter="alberto_27"
  />,
  contailer
);
