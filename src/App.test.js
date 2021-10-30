import { render, screen, fireEvent, within } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import App from "./App";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("Mostrar error si no ingresan una tarea", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId("add-button"));
  const errorMessage = screen.getByText("Debes ingresar una tarea.");
  expect(errorMessage).toBeInTheDocument();
});

test("Agregar tarea", () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId("text-input");
  const button = getByTestId("add-button");
  fireEvent.change(input, { target: { value: "Completar Proyecto" } });
  fireEvent.click(button);
  const list = screen.getByRole("list", {
    name: /todos/i,
  });
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(1);
});

test("Completar tarea", () => {
  const { getByTestId, getByRole } = render(<App />);
  const input = getByTestId("text-input");
  const button = getByTestId("add-button");
  fireEvent.change(input, { target: { value: "Eliminar Tarea" } });
  fireEvent.click(button);
  const list = screen.getByRole("list", {
    name: /todos/i,
  });
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  const firstItem = getByRole("checkbox");
  fireEvent.click(firstItem);
  const result = firstItem.checked;
  expect(result).toEqual(true);
});

test("Eliminar tarea", () => {
  const { getByTestId, getByRole } = render(<App />);
  const input = getByTestId("text-input");
  const button = getByTestId("add-button");
  fireEvent.change(input, { target: { value: "Eliminar Tarea" } });
  fireEvent.click(button);
  const list = screen.getByRole("list", {
    name: /todos/i,
  });
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  const firstItem = getByRole("checkbox");
  fireEvent.click(firstItem);
  const deleteButton = getByTestId("delete-button");
  fireEvent.click(deleteButton);
  const result = screen.getByText("No hay tareas.");
  expect(result).toBeInTheDocument();
});

test("Eliminar solo las tareas completadas", () => {
  const { getByTestId, getByRole } = render(<App />);
  const input = getByTestId("text-input");
  const button = getByTestId("add-button");
  fireEvent.change(input, { target: { value: "Inicio de Proyecto" } });
  fireEvent.click(button);
  fireEvent.change(input, { target: { value: "Creacion de Test" } });
  fireEvent.click(button);
  fireEvent.change(input, { target: { value: "Eliminar tareas" } });
  fireEvent.click(button);
  const list = screen.getByRole("list", {
    name: /todos/i,
  });
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  for (let i = 0; i < items.length - 1; i++) {
    const info = within(items[i]);
    const currentCheckbox = info.getByRole("checkbox");
    fireEvent.click(currentCheckbox);
  }
  const deleteButton = getByTestId("delete-button");
  fireEvent.click(deleteButton);

  const updateLista = screen.getByRole("list", {
    name: /todos/i,
  });
  const resultUpdateLista = within(updateLista);
  const resultItems = resultUpdateLista.getAllByRole("listitem");
  expect(resultItems.length).toBe(1);
});
