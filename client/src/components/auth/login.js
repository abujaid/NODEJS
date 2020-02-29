import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/authAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
  };
  handleReset = () => {
    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 m-auto">
            <form action="" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  className="form-control"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  className="form-control"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary float-right ml-2"
                >
                  Login
                </button>
                <button
                  className="btn btn-dark float-right"
                  onClick={this.handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.isAuthenticate
  };
};
export default connect(mapStateToProps, { loginUser })(Login);
