const { Router } = require('express');
const router = Router();

const controllers = require('../controllers')

router.get('/', (req, res) => {
    res.send('Class 04 - Controllers');
});

router.post('/user', controllers.create);
router.get('/user/:id', controllers.read);
router.put('/user/:id', controllers.update);
router.delete('/user/:id', controllers.delete);

module.exports = router;