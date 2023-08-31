import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data -----> ", data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  const trimmedText = text.trim();
  if (trimmedText === "") {
    toast.error("Text cannot be empty");
    return;
  }

  axios
    .post(`${baseUrl}/save`, { text: trimmedText })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  const trimmedText = text.trim();
  if (trimmedText === "") {
    toast.error("Text cannot be empty");
    return;
  }
  axios
    .put(`${baseUrl}/update/${toDoId}`, { text: trimmedText })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (toDoId, setToDo) => {
  axios
    .delete(`${baseUrl}/delete/${toDoId}`)
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
