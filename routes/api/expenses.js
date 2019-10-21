const express = require('express');
const router = express.Router();

/*
	@route			GET  api/expenses
	@desc				Test route
	@access			Public
*/
router.get('/', (req, res) => res.send('Expenses route'));

module.exports = router;
