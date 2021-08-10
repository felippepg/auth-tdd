const app = require('./src/App');
require('./src/database');

app.listen(process.env.PORT || 3000, () => console.log('server is running'));