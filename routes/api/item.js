const express = require('express')

const {
    getAllItems, 
    createItem, 
    deleteItem
} = require('../../controllers/api/item')

const router = express.Router()

// @route   /api/items
// @access  public
router.route('/')
.get(getAllItems)             // @method    GET
.post(createItem)             // @method    POST  

// @route   /api/items/:id
// @access  public
router.route('/:id')
.delete(deleteItem)            // @method   DELETE

module.exports = router
