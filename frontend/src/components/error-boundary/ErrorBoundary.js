import React, { Component } from "react";
import PropTypes from "prop-types";
import ErrorMessage from "../../assets/global-styles/Errors";

class ErrorBoundary extends Component {
  state = {
    error: "",
    errorInfo: "",
    hasError: false,
  };
  envType = process.env.NODE_ENV;
  isDevInstance = !this.envType || this.envType === "development";

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log({ error, errorInfo });
    this.setState({ errorInfo });
  }

  render() {
    const { hasError, errorInfo } = this.state;
    if (hasError) {
      return (
        <>
          <ErrorMessage>
            Sorry, an error occured - please try again later
          </ErrorMessage>
          {this.isDevInstance ? (
            <div>
              <p>Error details:</p>
              <code>{errorInfo && errorInfo.componentStack.toString()}</code>
            </div>
          ) : null}
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
