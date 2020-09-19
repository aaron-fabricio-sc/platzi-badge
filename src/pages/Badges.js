import React from "react";
import { Link } from "react-router-dom";
import "./styles/Badges.css";

import Logo from "../images/platziconf-logo.svg";
import BadgesList from "../components/BadgesList";

import PageLoading from "../pages/PageLoading";
import api from "../api";
import Error500 from "./Error500";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading == true) {
      return <PageLoading></PageLoading>;
    }
    // console.log("2. render");
    if (this.state.error) {
      return <Error500></Error500>;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={Logo} alt="Logo "></img>
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary boton">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data}></BadgesList>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
