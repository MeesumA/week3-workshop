const path = require('path');

module.exports = {
  route: (app) => {
    app.get('/', (req, res) => {
      const filePath = path.resolve(__dirname, '../public/login.html');
      res.sendFile(filePath);
    });
  }
};
