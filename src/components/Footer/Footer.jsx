import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const { config } = this.props;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="Container footer">
        <div className="w768">
          <a href="https://viblo.asia/u/KieuQuocHung">My viblo</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
