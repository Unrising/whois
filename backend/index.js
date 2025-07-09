const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Backend is running');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
