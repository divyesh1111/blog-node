require('dotenv').config(); // Load .env variables first
const app = require('./app');

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
