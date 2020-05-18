import React from "react";

import "./style/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://es.gravatar.com/userimage/186397731/16bb1f1833df1ffee8d4954dc55d8f97.jpg"
            alt="Avatar"
          />
          <h1>
            Alberto
            <br />
            López
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@ing_alberto27</div>
        </div>

        <div className="Badge__footer">#platziConf</div>
      </div>
    );
  }
}

export default Badge;
