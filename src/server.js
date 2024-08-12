const app = require('./app');
const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.send('server is working');
});

app.post('/post', (req, res) => {
  res.send('test route is working');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});