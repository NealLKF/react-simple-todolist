
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { v4 } from "uuid";

const InputTodo = ({ oriDataList, setOriDataList, renderList }) => {
  const [newTodo, setNewTodo] = useState("");
  const ChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };
  const { register, handleSubmit } = useForm();
  const AddNewTodo = (data, e) => {
    console.log(data);
    renderList.current = true;
    setOriDataList([
      { ...data, ikey: v4(), isDone: false },
      ...oriDataList
    ]);
    e.target.reset();
  };
  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      // 👇 Get input value
      AddNewTodo();
    }
  };

  return (
    <form onSubmit={handleSubmit(AddNewTodo)}>
      <input
        {...register("note")}
        required
        type="text"
        placeholder="請輸入待辦事項"
      />
      <button type="submit">
        <i className="fa fa-plus"></i>
      </button>
    </form>
  );
};

export default InputTodo;