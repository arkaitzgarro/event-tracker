module.exports = (req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plan' });
  res.write('OK');
  res.end();
};
