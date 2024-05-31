const { Router } = require('express');
const cartController = require('../Controller/cart-controller');
const router = Router();

router.get('/:userId', cartController.get_cart_items);
router.post('/:userId', cartController.add_cart_item);
router.delete('/:userId/:itemId', cartController.delete_item);
router.put('/:userId/:itemId', cartController.update_item_quantity); // New route for updating item quantity

module.exports = router;
