const express = require('express');
const app = express();
const PORT = 3001;

const machinesRoutes = require('./routes/machinesRoutes');

app.use(express.json());
app.use('/api', machineRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT}`);
});


