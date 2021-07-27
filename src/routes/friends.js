const express = require('express')
const router = express.Router()
//importamos la conexión a la BDD "friends" con sus querys
const pool = require('../database')

router.get('/add', (req, res) => {
   res.render('friends/add')
})
router.post('/add', (req, res) => {
    res.send("recibido!")
 })
module.exports = router;