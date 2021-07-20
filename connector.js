const express = require('express');
const app = express();
app.listen(8080, () => console.log('listening to 3000'));
app.use(express.static('iot (2).html'));


