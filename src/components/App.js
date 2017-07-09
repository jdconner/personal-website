import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="full-screen container">
        <NavBar />
        <div id="main-container" className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
