import React from "react";

import BadgeDeatails from "./BadgeDetails";

import api from "../api";
import PageLoading from "./PageLoading";
import PageError from "./Error500";

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };
  handleDeleteBadge = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading></PageLoading>;
    }
    if (this.state.error) {
      return <PageError error={this.state.error}> </PageError>;
    }
    return (
      <BadgeDeatails
        onDeleteBadge={this.handleDeleteBadge}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        badge={this.state.data}
      ></BadgeDeatails>
    );
  }
}

export default BadgeDetailsContainer;
