import React from "react";

import Log from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";
import "./styles/BadgeDetails.css";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";
function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={Log} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name ">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
            ></Badge>
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary"
                  to={`badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button
                  onClick={props.onOpenModal}
                  className="btn btn-danger mt-4"
                >
                  Delete
                </button>
                <DeleteBadgeModal
                  onDeleteBadge={props.onDeleteBadge}
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                ></DeleteBadgeModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
