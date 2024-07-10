const express = require("express");
const router = express.Router();


router.get("/", async (req, res, next) => {
    res.send({
        title: "test",
    });
});

// POST /register endpoint
router.post("/register", async (req, res, next) => {
    try {
       

    } catch (error) {
        
    }
});


module.exports = router;