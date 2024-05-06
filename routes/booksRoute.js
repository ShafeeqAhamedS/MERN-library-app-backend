const express = require('express')
const router = express.Router()
const {getAllBooks, addNewBook, updateBook} = require('../controllers/booksController')
const {getISBN} = require('../controllers/validateController')

router.route('/').get(getAllBooks).post(addNewBook).patch(updateBook)
router.route('/').post(getISBN)

module.exports = router