const express = require("express");
const app = express();
const router = express.Router();

//user	Controller
const user = require("../controllers/user.controller");
//validation to userId
const { validateUser } = require("../middlewares/verifyUser.middleware");

//user	Middleware
const userMiddleware = require("../middlewares/user.middleware");

//routes to user
router.post("/", [validateUser, userMiddleware.insert], user.insertUser);
router.get("/", [validateUser], user.getAllUsers);
router.get("/:userId", [validateUser, userMiddleware.get], user.getUser);
router.put("/", [validateUser, userMiddleware.update], user.updateUser);
router.delete("/:userId", [validateUser, userMiddleware.delete], user.deleteUser);

app.use("/api/user", router);
module.exports = app;
