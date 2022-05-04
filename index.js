const express =  require('express')
const bodyParser = require('body-parser')
const walletRoutes = require('./api/routes/walletRoutes')
const PORT = 3000 || process.env.PORT

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())



app.get('/', (req,res)=>{
    res.send('Welcome to your wallet')
})
app.use(walletRoutes)


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})