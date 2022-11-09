const bilanganController = require('../controllers/bilanganController')
const router = require('express').Router()

router.post('/', bilanganController)

router.post("/kalkulator", bilanganController.kalkulatorCotntroller);

router.post("/kelipatan", bilanganController.multipleController);

router.post("/penjumlahanArray", bilanganController.sumArrayController);


module.exports = router