const express = require('express')
const walletController = require('../controllers/walletController')

const router = express.Router()

router.post('/customer', walletController.postCustomer)
router.post('/deposit', walletController.postDeposit)
router.post('/withdraw', walletController.postWithdraw)
router.get('/balance', walletController.getBalance)
router.get('/transaction', walletController.getTransaction)


module.exports = router