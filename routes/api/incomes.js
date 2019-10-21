const express = require('express');
const router = express.Router();

/*
	@route			GET  api/imcomes
	@desc				Test route
	@access			Public
*/
router.get('/', (req, res) => res.send('Incomes route'));

module.exports = router;
