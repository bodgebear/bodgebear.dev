import Router from 'next/router';

const redirect = (res, to) => {
  if (res) {
    res.writeHead(302, {
      Location: to,
    });
    res.end();
  } else {
    Router.push(to);
  }

  return {};
};

export default redirect;
