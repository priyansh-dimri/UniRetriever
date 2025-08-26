const Item = require('../models/item.model');

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find().populate('reportedBy', 'username university');
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createItem = async (req, res) => {
    try {
        const { itemName, description, category, status, location, reportedBy } = req.body;
        const newItem = new Item({ itemName, description, category, status, location, reportedBy });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateItemStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const item = await Item.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!item) return res.status(404).json({ error: "Item not found" });
        res.json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
