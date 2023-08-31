const express = require("express");
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/todoController");

const router = express.Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.put("/update/:id", updateToDo);
router.delete("/delete/:id", deleteToDo);

module.exports = router;
