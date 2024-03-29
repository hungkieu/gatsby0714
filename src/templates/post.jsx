import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import PostTags from '../components/PostTags/PostTags';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div className="Container">
          <div className="w768">
            <Helmet>
              <title>{`${post.title} | ${config.siteTitle}`}</title>
            </Helmet>
            <SEO postPath={slug} postNode={postNode} postSEO />
            <div className="Post">
              <h1 className="title">{post.title}</h1>
              <div className="post-meta">
                <PostTags tags={post.tags} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
