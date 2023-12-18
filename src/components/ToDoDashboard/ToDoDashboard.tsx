import React, { useContext } from 'react';
import AddToDo from '../AddToDo/AddToDo';
import ToDoItem from '../ToDoItem/ToDoItem';
import { ToDoContext } from '../../contexts/ToDoProvider';
import { useToDo } from '../../hooks/UseToDo/UseToDo';

function ToDoDashboard(): JSX.Element {
  const { toDoList, setToDoList } = useContext(ToDoContext);
  const { updateToDoStatus, deleteToDo } = useToDo(toDoList);

  const onChangeClick = (name: string): void => {
    const updatedList = updateToDoStatus(name);
    setToDoList(updatedList);
  };

  const onDeleteClick = (name: string): void => {
    const filteredList = deleteToDo(name);
    setToDoList(filteredList);
  };

  return (
    <div className="bg-white rounded shadow p-6 mx-auto w-full lg:w-3/4 lg:max-w-lg">
      <div className="mb-4">
        <AddToDo></AddToDo>
      </div>
      <div className="overflow-auto sm:container sm:mx-auto max-h-screen">
        {toDoList?.length > 0 ? (
          toDoList.map((toDo, index) => (
            <ToDoItem
              key={index}
              name={toDo.name}
              isCompleted={toDo.isCompleted}
              onDoneButtonClick={(): void => onChangeClick(toDo.name)}
              onDeleteButtonClick={(): void => onDeleteClick(toDo.name)}></ToDoItem>
          ))
        ) : (
          <p>To-do list is empty</p>
        )}
      </div>
    </div>
  );
}

export default ToDoDashboard;
