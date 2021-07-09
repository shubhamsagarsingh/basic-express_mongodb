const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const authRoutes = require('./routes/auth')
const app = express()



const port = process.env.PORT || 8000


app.use('/api', authRoutes)


mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify : false
}).then( () => console.log('DB Connected'))
.catch((e) => console.log(e))


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})