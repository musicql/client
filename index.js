var compression = require('compression')
const express = require('express');
const path = require('path');
const cors = require('cors')
require('dotenv').config();
const app = express();
const options = {
    immutable: true,
    cacheControl: true, 
    maxAge: 60000,
    headers: {
        "Cache-Control": "max-age=60000"
    }
}
app.use(compression())
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'),options);
});
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on ${PORT}`));