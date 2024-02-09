import React from 'react';
import AddToDo from '../AddToDo/AddToDo';
import ToDoItem from '../ToDoItem/ToDoItem';
import { useToDo } from '../../../hooks/UseToDo/UseToDo';

function ToDoDashboard(): JSX.Element {
  const { createToDo, updateToDoStatus, deleteToDo, items } = useToDo();

  return (
    <div className="bg-white rounded shadow p-6 mx-auto w-full lg:w-3/4 lg:max-w-lg">
      <div className="mb-4">
        <AddToDo onAddClick={createToDo}></AddToDo>
      </div>
      <div className="overflow-auto sm:container sm:mx-auto max-h-screen">
        {items?.length > 0 ? (
          items.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} onDoneButtonClick={updateToDoStatus} onDeleteButtonClick={(): void => deleteToDo(todo.id)}></ToDoItem>
          ))
        ) : (
          <p>To-do list is empty</p>
        )}
      </div>
    </div>
  );
}

export default ToDoDashboard;
