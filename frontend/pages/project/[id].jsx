import React from 'react';

const Post = (props) => {

  return (
    <>
      <h1>{props.games.project.id}</h1>
      <p>This is the blog post content.</p>
      {console.log(props)}
    </>
  );
};

Post.getInitialProps = async ({ req, query: { id } }) => {
  const baseUrl = req
    ? `${req.headers['x-forwarded-proto']}://${req.headers['x-forwarded-host']}`
    : window.location.origin;
  const res = await fetch(`${baseUrl}/api/projects/${id}`);
  const data = await res.json();

  return {
    games: data,
  };
};

export default Post;
