const app = require('./app');

console.log(app.get('env'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
