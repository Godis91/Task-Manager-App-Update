const express = require('express');
require('./db/mongoose');

const app = express();

app.use(express.json());
app.use('/users', require('./routes/user'));
app.use('/tasks', require('./routes/task'));

const port = process.env.PORT;

app.listen(port, () => console.log(`server started on port ${port}`));
