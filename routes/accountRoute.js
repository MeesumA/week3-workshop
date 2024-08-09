const path = require('path');

module.exports = {
  route: (app) => {
    app.get('/account', (req, res) => {
      const filePath = path.resolve(__dirname, '../public/account.html');
      res.sendFile(filePath);
    });
  }
};
