const express = require('express')

const Item = require('../../models/Item')

// @desc     get all items
module.exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find()
        .sort({date: 'desc'})
        res.json(items)
    } catch (err) {
        console.log(err)
    }
}

// @desc    create an item
module.exports.createItem = async (req, res) => {
    try {
        const newItem = new Item(req.body)
        await newItem.save()
        res.status(201).json(newItem)
    } catch (err) {
        res.status(404).json({'msg': 'Field cannot be empty!'})
    }
}

// @desc    delete an item
module.exports.deleteItem = async (req, res) => {
    const id = req.params.id
    try{
        const result = await Item.deleteOne({_id: id})
        if (result.deletedCount !== 1) throw({name: 'Item not found'})
        res.status(204).json({'msg': 'Item Deleted'})
    } catch (err) {
        res.status(404).json({'msg': err.name})
    }
}
