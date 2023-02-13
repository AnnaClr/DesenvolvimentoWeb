const express = require('express');
const app = express();
const port = 3000;

app.listen(port, console.log(`Server is running on PORT ${port}...`));
app.get('/', (requeste, response) => {
    response.send('Class 01 - Server');
})