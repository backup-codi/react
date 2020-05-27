import React from "react";

class BadgeForm extends React.Component {
  // Inicializamos el estado para cuando cargue la pagina no marque error el value de los input
  state = {
    jobTitle: "Desinger",
  };
  handleChange = (e) => {
    // // console.log({ e }); // Imprime el evento
    // //si queremos ver el valor de ese evento
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });
    this.setState({
      // Dependiendo el input que se llame se guardara con el nombre de esa llave
      [e.target.name]: e.target.value,
    });
  };
  handleClick = (e) => {
    console.log("Button was clicked");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        {/* Para evitar que el formulario se envie */}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Firs Name:</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.fistName}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title:</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter:</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.state.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
