import React from "react";

import "./styles/BadgesList.css";
import logoTwitter from "../images/logoTwitter.svg";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesList">
              <div className="row BadgesListItem">
                <div className="col-3">
                  <img
                    className="BadgesListItem__avatar"
                    src={badge.avatarUrl}
                    alt="avatar"
                  />
                </div>
                <div className="col-9">
                  <h5>
                    {badge.firstName} {badge.lastName}
                  </h5>
                  <p>
                    <img
                      className="logoTwitter"
                      src={logoTwitter}
                      alt="Logo Twitter"
                    />
                    <a href="/">@{badge.twitter}</a>
                  </p>
                  <p>{badge.jobTitle}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default BadgesList;
