const User = require('../models/user-model');
const SupplementCard = require('../models/supplementcard-model');

// Get cart items for a user
const get_cart_items = async (req, res) => {
    const userId = req.params.userId;
    console.log("Fetching cart items for user ID:", userId);

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        // console.log("User:", user);

        const cart = user.cart;
        if (cart && cart.items.length > 0) {
            res.status(200).json(cart.items);
        } else {
            return res.status(404).send('No items in the cart');
        }
    } catch (err) {
        console.log("Error fetching cart items:", err);
        res.status(500).send("Something went wrong");
    }
};

// Add an item to the cart
const add_cart_item = async (req, res) => {
    const userId = req.params.userId;
    const { productId, quantity } = req.body;

    try {
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        let item = await SupplementCard.findById(productId);
        if (!item) {
            return res.status(404).send('Item not found');
        } 

        const price = item.offerAmount;
        const name = item.title;

        let cart = user.cart;
        let itemIndex = cart.items.findIndex(p => p.productId.toString() === productId);

        if (itemIndex > -1) {
            let productItem = cart.items[itemIndex];
            productItem.quantity += quantity;
            cart.items[itemIndex] = productItem;
        } else {
            cart.items.push({ productId, name, quantity, price });
        }

        cart.bill = cart.items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
        user.cart = cart;

        await user.save();
        res.status(201).send(user.cart);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};

// Delete an item from the cart
const delete_item = async (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.itemId;

    try {
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        let cart = user.cart;
        let itemIndex = cart.items.findIndex(p => p.productId.toString() === productId);
        if (itemIndex > -1) {
            let productItem = cart.items[itemIndex];
            cart.bill -= productItem.quantity * productItem.price;
            cart.items.splice(itemIndex, 1);
        }

        cart.bill = cart.items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
        user.cart = cart;

        await user.save();
        res.status(201).send(user.cart);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};

// Update item quantity in the cart
const update_item_quantity = async (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.itemId;
    const { quantity } = req.body;

    try {
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        let cart = user.cart;
        let itemIndex = cart.items.findIndex(p => p.productId.toString() === productId);
        if (itemIndex === -1) {
            return res.status(404).send('Item not found in cart');
        }

        let productItem = cart.items[itemIndex];
        if (quantity < 1) {
            return res.status(400).send('Quantity cannot be less than 1');
        }

        productItem.quantity = quantity;
        cart.items[itemIndex] = productItem;

        cart.bill = cart.items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
        user.cart = cart;

        await user.save();
        res.status(200).send(user.cart);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};

module.exports = { add_cart_item, delete_item, get_cart_items, update_item_quantity };
