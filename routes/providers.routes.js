const providersController = require('../controllers/providers.controller');
const router = require('express').Router();

router.get('/', providersController.getProvider);
router.post('/', providersController.createProvider);
router.put('/', providersController.editProvider);
router.delete('/', providersController.deleteProvider);

module.exports = router;