import Checkbox from "./Checkbox";

const TaskList = ({ list, setList }) => {
  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };

  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  const chk = list.map((item) => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="mt-4">
      {list.length ? (
        <ul aria-label="todos">{chk}</ul>
      ) : (
        <div className="flex justify-center">
          <p className="text-xl text-gray-500">No hay tareas.</p>
        </div>
      )}

      {list.length ? (
        <div className="flex justify-center mt-8">
          <button
            data-testid={"delete-button"}
            onClick={onClickRemoveItem}
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Eliminar tareas completadas
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TaskList;
