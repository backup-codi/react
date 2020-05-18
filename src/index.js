// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges';

// const container = document.getElementById('app');
// container.appendChild(element);

import React from "react"; //Necesario si utilizaremos JSX
import ReactDOM from "react-dom";

//Que elemento queremos renderizar
// const element = <h1>Hello, Platzi Badges from React!</h1>;
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a platzi"
// );

// const name = "Alberto";
// const sum = () => 3 + 3;
// // const element = React.createElement("h1", {}, `Hola soy ${name}`);
// const jsx = <h1>Hola soy, {sum()}</h1>;

const jsx = (
  <div>
    <h1>Hola, soy Alberto</h1>
    <p>Soy Ingeniero en sistemas</p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola, soy Alberto"),
  React.createElement("p", {}, "Soy ingeniero en sistemas")
);

//Donde queremos renderizarlo
const contailer = document.getElementById("app");

// ReactDOM.render(que_Queremos, donde_lo_queremos);
ReactDOM.render(element, contailer);
