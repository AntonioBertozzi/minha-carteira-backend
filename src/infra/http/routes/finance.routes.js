const { Router } = require('express');
const movimentController = require('../../../modules/finance/controllers/movimentController');
const authenticated = require('../middlewares/authenticated');

const financeRouter = Router();

financeRouter.post('/moviment', authenticated, movimentController.create);

module.exports = financeRouter;
