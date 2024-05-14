// // const express = require('express')  2021  //commonjs

// import express from 'express'  //2024   // module
// const app = express()
// const port = 3004    // 3000 to 9000

// app.get('/', (req, res) => {
//   res.send('aj backend parh lein')
// })

// app.get('/about', (req, res) => {
//   res.send('Aboutus 🎈')
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



// ************************ Real Backend *******************


import express from 'express'
import { db,connectToDb} from './db.js'
const app = express();
app.use(express.json())

//async await,arrow function
app.get(''), async (req,res) =>{
 const {name} = req.params;
}

