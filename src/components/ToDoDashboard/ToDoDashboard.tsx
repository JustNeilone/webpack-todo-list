import React from 'react';
import AddToDo from '../AddToDo/AddToDo';
import ToDoItem from '../ToDoItem/ToDoItem';
import { useToDo } from '../../hooks/UseToDo/UseToDo';
import mockData from '../../mockData';
import { UUID } from 'crypto';

function ToDoDashboard(): JSX.Element {
  const toDoList = [...mockData];
  const { createToDo, updateToDoStatus, deleteToDo, items } = useToDo(toDoList);

  const onChangeClick = (id: UUID): void => {
    updateToDoStatus(id);
  };

  const onDeleteClick = (id: UUID): void => {
    deleteToDo(id);
  };

  return (
    <div className="bg-white rounded shadow p-6 mx-auto w-full lg:w-3/4 lg:max-w-lg">
      <div className="mb-4">
        <AddToDo onAddClick={createToDo}></AddToDo>
      </div>
      <div className="overflow-auto sm:container sm:mx-auto max-h-screen">
        {items?.length > 0 ? (
          items.map(({ id, name, isCompleted }) => (
            <ToDoItem
              key={id}
              name={name}
              isCompleted={isCompleted}
              onDoneButtonClick={(): void => onChangeClick(id)}
              onDeleteButtonClick={(): void => onDeleteClick(id)}></ToDoItem>
          ))
        ) : (
          <p>To-do list is empty</p>
        )}
      </div>
    </div>
  );
}

export default ToDoDashboard;
