const {customer, transaction} = require('../model/allModels')


module.exports.postCustomer = (req,res)=> {
const name = req.body.name
    const email = req.body.email
    try {
        customer.name.push(name)
        customer.email.push(email)
        res.json({customer})
    } catch (error) {
        console.log(error)
    }
}
module.exports.postDeposit = (req,res)=> {
    const amount = req.body.amount 
    customer.balance += amount
    res.json({customer})
    transaction.amount.push(amount)
    transaction.transType.push('Deposit')
}
module.exports.postWithdraw = (req,res)=> {
    const amount = req.body.amount 
    customer.balance -= amount
    res.json({customer})
    transaction.amount.push(amount)
    transaction.transType.push('Withdrawal')

}
module.exports.getBalance = (req,res)=> {
    const accountNumber = customer.accountNumber
    const balance = customer.balance
    res.json({accountNumber, balance})
}
module.exports.getTransaction = (req,res)=> {
    
    res.json({transaction})
}




