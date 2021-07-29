const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Helloo world!'));

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));