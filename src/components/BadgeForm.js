import React from "react";

class BadgeForm extends React.Component {
  state = {};
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  // };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.props.onSubmit}>
          {this.props.error && (
            <p className="text-danger font-weight-bold text-uppercase">
              {this.props.error.message}
            </p>
          )}
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              className="form-control"
              value={this.props.formValues.firstName}
            ></input>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              className="form-control"
              value={this.props.formValues.lastName}
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              name="email"
              className="form-control"
              value={this.props.formValues.email}
            ></input>
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="jobTitle"
              className="form-control"
              value={this.props.formValues.jobTitle}
            ></input>
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="twitter"
              className="form-control"
              value={this.props.formValues.twitter}
            ></input>
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
