import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import 'moment/locale/vi';

moment.locale('vi');

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
      <div className="PostCard" key={post.path}>
        <Link to={post.path} key={post.title}>
          <img src={post.cover} alt={post.title} />
          <div className="content">
            <div className="title">{post.title}</div>
            <div className="date">{moment(post.date).format("dddd, Do MMMM YYYY")}</div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{PostNodes}</>;
};

export default PostListing;
