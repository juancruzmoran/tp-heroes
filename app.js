const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

/* nuestro servidor  */

app.listen(port, () => console.log('Server running in http://localhost:' + port));
