module.exports = (req, res, model) => {
  let body = '';

  req.on('data', (data) => {
    body = `${body}${data}`;

    // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
    if (body.length > 1e6) {
      // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
      req.connection.destroy();
    }
  });

  req.on('end', () => {
    let data;
    try {
      data = JSON.parse(body);
    } catch (e) {
      console.error(e);
      res.writeHead(500);
      return res.end();
    }

    model.pageView.create({
      pageId: Date.now() + Math.random(),
      data
    }).then(() => {
      res.writeHead(204);
      res.end();
    }).catch ((e) => {
      console.error(e);
      res.writeHead(500);
      res.end();
    });
  });
};