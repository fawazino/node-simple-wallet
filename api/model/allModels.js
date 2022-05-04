const customer = {
    name : [],
    email: [],
    accountNumber: Math.floor(1000000000 + Math.random() * 9000000000),
    balance: 0
}

const transaction = {

amount: [],
transactionID: Math.floor(10000 + Math.random() * 90000),
transType: []


}


module.exports = {
    customer,
    transaction   
}