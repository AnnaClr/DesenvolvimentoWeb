const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')

router.get('/', (res, req) => {
    res.send('Class 05 - Challenge');
});

router.post('/user', controllers.create);
router.get('/user/:id', controllers.read);
router.put('/user/:id', controllers.update);
router.delete('/user/:id', controllers.delete);

module.exports = router