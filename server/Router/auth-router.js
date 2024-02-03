const express = require('express');
const router = express.Router();

router.route('/').get((req,res)=>{
    res.send("First Route Setup successfully")
})

module.exports = router;