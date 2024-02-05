import React, { useState } from 'react';
import ActionButton from '../../shared/ActionButton';

export interface AddToDoProps {
  onAddClick: (obj) => void;
}

const HEADING = 'My ToDo List';
const PLACEHOLDER = 'Add ToDo';
const ADD_BTN_STYLE = 'flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal';

function AddToDo({ onAddClick }: AddToDoProps): JSX.Element {
  const [newToDo, setNewToDo] = useState<string>();

  const addToDo = (): void => {
    onAddClick(newToDo);
    setNewToDo('');
  };

  return (
    <div>
      <h1 className="text-grey-darkest">{HEADING}</h1>
      <div className="flex mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          type="text"
          value={newToDo}
          onChange={(e): void => setNewToDo(e.target.value)}
          placeholder={PLACEHOLDER}
        />
        <ActionButton text="Add" style={ADD_BTN_STYLE} isDisabled={!newToDo} onClick={(): void => addToDo()}></ActionButton>
      </div>
    </div>
  );
}

export default AddToDo;
