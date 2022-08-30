const express = require("express");
const setupMongoConnection  = require('./db/conn')
const app = express();

const authRoute = require('./routes/auth')
const projectRoute = require('./routes/project')
const taskRoute = require('./routes/task')

const port = process.env.PORT || 8000;

try {
    setupMongoConnection();
} catch (error) {
    console.log(`ERROR ${error}`);
}

app.use(express.json());
app.use(authRoute);
app.use(projectRoute);
app.use(taskRoute);

app.listen(port, () => {
    console.log(`Server runs on port number ${port}`);
})