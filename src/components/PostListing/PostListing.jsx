import React from 'react';
import { Link } from 'gatsby';

const PostListing = ({ postEdges }) => {
  const postList = postEdges.map(postEdge => {
    return {
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead
    };
  });

  const PostNodes = postList.map(post => {
    return (
      <Link to={post.path} key={post.title}>
        <b>{post.title}</b>
      </Link>
    );
  });

  return <>{PostNodes}</>;
};

export default PostListing;
