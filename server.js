const express = require('express')
const cors = require('cors')
const app = express()

//Core
var corOptions = {
    origin: 'https://127.0.0.1:8081'
}

// middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// testing api
app.get('/', (req, res) => {
    res.json({ message: 'hi from api'})
})


//Port
const PORT = process.env.PORT || 3000

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})