import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firsName="Alberto"
                lastName="López"
                twitter="Alberto35118368"
                jobTitle="Frontend Engineer"
                avatarUrl="https://es.gravatar.com/userimage/186397731/16bb1f1833df1ffee8d4954dc55d8f97.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
