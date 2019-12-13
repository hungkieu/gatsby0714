import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import config from '../../data/SiteConfig';
import './index.css';

const MainLayout = props => {
  const { children } = props;

  return (
    <div id="main">
      <Header title={config.siteTitle} />
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="vi" />
      </Helmet>
      <div style={{height: "100%", flexGrow: 1}}>
        {children}
      </div>
      <Footer config={config} />
    </div>
  );
};

export default MainLayout;
