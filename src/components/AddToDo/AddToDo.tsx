import React, { useContext } from 'react';
import ActionButton from '../shared/ActionButton';
import { useToDo } from '../../hooks/UseToDo/UseToDo';
import { ToDoContext } from '../../contexts/ToDoProvider';

function AddToDo(): JSX.Element {
  const { newToDo, setToDo, toDoList, setToDoList } = useContext(ToDoContext);
  const { createToDo } = useToDo(toDoList);

  const addToDo = (obj: object): void => {
    const newToDo = createToDo(obj);
    const updatedList = [...toDoList, newToDo];
    setToDoList(updatedList);
    setToDo({ name: '', isCompleted: false });
  };

  const isBtnDisabled = (objName: string): boolean => {
    return objName === '';
  };

  const heading = 'My ToDo List';
  const placeholder = 'Add ToDo';
  const addBtnStyle = 'flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal';

  return (
    <div>
      <h1 className="text-grey-darkest">{heading}</h1>
      <div className="flex mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          type="text"
          value={newToDo.name}
          onChange={(e): void => {
            const newObj = { name: e.target.value, isCompleted: false };
            setToDo(newObj);
          }}
          placeholder={placeholder}
        />
        <ActionButton text="Add" style={addBtnStyle} isDisabled={isBtnDisabled(newToDo.name)} onClick={(): void => addToDo(newToDo)}></ActionButton>
      </div>
    </div>
  );
}

export default AddToDo;
