const stringify = require('./stringify');

const jsonRequest = (res, body, statusCode = 200) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = statusCode;
  return res.end(stringify(body));
}

module.exports = jsonRequest;
