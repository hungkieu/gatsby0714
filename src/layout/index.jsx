import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import config from '../../data/SiteConfig';
import './index.css';

const MainLayout = props => {
  const { children } = props;

  return (
    <div>
      <Header title={config.siteTitle} />
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="vi" />
      </Helmet>
      {children}
    </div>
  );
};

export default MainLayout;
