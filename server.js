const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const loginRoute = require('./routes/loginRoute');
const accountRoute = require('./routes/accountRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes
loginRoute.route(app);
accountRoute.route(app);

// Endpoint to test user credentials
const users = [
  { email: 'email@example.com', password: '123' },
  { email: 'user@domain.com', password: '456' },
  { email: 'admin@site.com', password: '789' }
];

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
