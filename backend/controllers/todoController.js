// define how our data is going to data in database
const ToDoModel = require("../models/todoModels");

//getting todo
module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

//saving todo
module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    console.log("Added Successfully");
    console.log(data);
    res.send(data);
  });
};

//update todo
module.exports.updateToDo = async (req, res) => {
  const {id }= req.params;
  const { text } = req.body;
  ToDoModel.findByIdAndUpdate(id, { text })
    .then(() => res.send("Updated Successfully...."))
    .catch((err) => console.log(err));
};

//delete todo
module.exports.deleteToDo = async (req, res) => {
  const {id} = req.params;
  ToDoModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted Successfully...."))
    .catch((err) => console.log(err));
};
