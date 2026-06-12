import 'dotenv/config';
import  dbConnection  from './src/config/dbConnection.js';

import app from './server.js';

const PORT = process.env.PORT || 8000;


const server = app.listen(PORT, async () => {
  // DB Connection
  await dbConnection()
    .then(() => console.log(`running at: http://127.0.0.1:${PORT}`))
    .catch(() => {
      console.log('Server shutting down due to DB connection failure.');
      server.close(() => process.exit(1));
    });
});
