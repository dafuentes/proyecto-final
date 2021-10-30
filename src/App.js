import React, { useState } from "react";
import FormTodo from "./components/FormTodo";
import TaskList from "./components/TaskList";

function App() {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-12 bg-gray-100">
      <div className="max-w-md w-full space-y-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-10 py-5">
          <h1 className="text-2xl font-bold my-4">
            Proyecto Final Aseguramiento Calidad de Software
          </h1>
          <FormTodo handleAddItem={handleAddItem} />
          <TaskList list={list} setList={setList} />
        </div>
      </div>
    </div>
  );
}

export default App;
