const PlansController = require('../controller/plans.controller');

module.exports = function(app){
    app.post('/api/plans/new', PlansController.createEntry);
    app.get('/api/plans', PlansController.getAllEntries);
    app.get('/api/plans/:id', PlansController.getEntry);
    app.put('/api/plans/:id/edit', PlansController.updateEntry);
    app.delete('/api/plans/:id/delete', PlansController.deleteEntry);
}