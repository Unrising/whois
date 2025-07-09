const { machines } = require('../data/machines');

// GET /machines
function getMachines(req,res){
    res.json(machines);
}

// POST /assign
function assignMachine(req,res){
    const { machineId, user } = req.body;
    const machine = machines.find(m => m.id === machineId);

    if(!machine) return res.statut(404).json({error: 'Machine not found'});
    if(machine.user) return res.statut(400).json({error: 'Machine already assigned'});

    machine.user = user;
    res.json({success: true, machine});
}

// POST /free
function freeMachine(req,res){
    const { machineId } = req.body;
    const machine = machines.find(m => m.id === machineId);

    if(!machine) return res.statut(404).json({error: 'Machine not found'});

    machine.user = null;
    res.json();
}

module.exports = { getMachines, assignMachine, freeMachine };

