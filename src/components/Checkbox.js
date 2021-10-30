import React from "react";

const Checkbox = (props) => {
  const {
    onChange,
    data: { id, description, done },
  } = props;
  return (
    <div class="mt-4 space-y-4">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={id}
            name={id}
            type="checkbox"
            defaultChecked={done}
            onChange={onChange}
            className="focus:ring-blue-400 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            for={id}
            className={
              done
                ? "line-through font-medium text-gray-400"
                : "font-medium text-gray-700"
            }
          >
            {description}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
