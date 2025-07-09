const express = require('express');
const router = express.Router();
const {
    getMachines,
    assignMachine,
    freeMachine,
} = require('../controllers/machineController');

router.get('/machines', getMachines);
router.get('/assign', assignMachine);
router.get('/free', freeMachine);

module.exports = router;