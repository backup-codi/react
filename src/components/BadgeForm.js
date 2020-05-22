import React from "react";

class BadgeForm extends React.Component {
  handleChange = (e) => {
    // console.log({ e }); // Imprime el evento
    //si queremos ver el valor de ese evento
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };
  handleClick = (e) => {
    console.log("Button was clicked");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        {/* Para evitar que el formulario se envie */}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Firs Name:</label>
            {/* En un input cada que escribimos react nos da un evento onChange */}
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
            />
          </div>
          {/* El boton tiene un evento onClick */}
          {/* Por default button tiene el atributo type="submit" lo cual hace recargar la pagina. para omitir esta accion lo cambiamos a button. La otra opcion es desde form con onSubmit*/}
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
