const express = require('express');
require('dotenv').config();
const db = require("./models/index");
const router = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

//Core
var corOptions = {
    origin: 'https://127.0.0.1:8081'
}

// middleware
router.use(express.urlencoded({extended: true}));
router.use(express.json());
router.use(cors());

router.get("/", async (req, res, next) => {
    res.send({
        title: "Welcome to !!",
    });
});

const authRoutes = require("./routes/Auth.routes");
router.use("/auth", authRoutes);

router.use( async (req, res, next) => {
    const error = new Error("Page not Found");
    error.status = 404;
    next(error);

});

router.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status,
            message: err.message
        }
    })
})

db.sequelize.sync().then(() => {
    console.log('Database synchronized');
    router.listen(PORT, () => {
        console.log(`Server is running at the port ${PORT}`);
    });
}).catch(error => {
    console.error('Error synchronizing the database:', error);
});