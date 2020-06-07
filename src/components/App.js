import React from "react";
import ConnectedTodos from "./Todo";
import ConnectedGoals from "./Goals";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    if (this.props.loading === true) {
      return (
        <h3 style={{ textAlign: "center", fontSize: 200, color: "gray" }}>
          Loading
        </h3>
      );
    }

    return (
      <div style={{ textAlign: "center" }}>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
