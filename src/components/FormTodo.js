import React, { useState } from "react";

const FormTodo = ({ handleAddItem }) => {
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function isBlank(str) {
    return !str || /^\s*$/.test(str);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isBlank(description)) {
      setError("Debes ingresar una tarea.");
      return;
    }
    setError("");
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-2">
        <div className="flex flex-row space-x-4">
          <input
            data-testid={"text-input"}
            type="text"
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Ingresa la tarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            data-testid={"add-button"}
            type="submit"
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
        {error && (
          <p className="text-red-500 font-bold text-xs text-left mt-2 ">
            {error}
          </p>
        )}
      </div>
    </form>
  );
};

export default FormTodo;
