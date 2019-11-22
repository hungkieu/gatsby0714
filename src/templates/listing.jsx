import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

const RenderPaging = ({ pageContext }) => {
  const { currentPageNum, pageCount } = pageContext;
  const prevPage = currentPageNum - 1 === 1 ? '/' : `/${currentPageNum - 1}/`;
  const nextPage = `/${currentPageNum + 1}/`;
  const isFirstPage = currentPageNum === 1;
  const isLastPage = currentPageNum === pageCount;

  if (pageCount <= 1) return <></>;

  return (
    <div className="w960 pagination">
      {!isFirstPage && <Link to={prevPage}>Previous</Link>}
      {[...Array(pageCount)].map((_val, index) => {
        const pageNum = index + 1;
        return (
          <Link
            key={`listing-page-${pageNum}`}
            to={pageNum === 1 ? '/' : `/${pageNum}/`}
          >
            {pageNum}
          </Link>
        );
      })}
      {!isLastPage && <Link to={nextPage}>Next</Link>}
    </div>
  );
};

const Listing = ({ data, pageContext }) => {
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div className="Container column">
        <div className="w960">
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} />
        </div>
        <RenderPaging pageContext={pageContext} />
      </div>
    </Layout>
  );
};

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
