import React from 'react';
import ActionButton from '../shared/ActionButton';

export interface ToDo {
  name: string;
  isCompleted: boolean;
}

export interface ToDoItemProps {
  name: string;
  isCompleted: boolean;
  onDeleteButtonClick: () => void;
  onDoneButtonClick: () => void;
}

function ToDoItem({ name, isCompleted, onDoneButtonClick, onDeleteButtonClick }: ToDoItemProps): JSX.Element {
  const completedStyle: string = 'w-full line-through text-green';
  const pendingStyle: string = 'w-full text-grey-darkest';
  const completeBtnStyle = 'flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green';
  const deleteBtnStyle = 'flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red';

  return (
    <div className="flex mb-4 items-center">
      <p className={isCompleted ? completedStyle : pendingStyle}>{name}</p>
      <ActionButton text={isCompleted ? 'Reset' : 'Done'} isDisabled={false} style={completeBtnStyle} onClick={onDoneButtonClick}></ActionButton>
      <ActionButton text="Delete" style={deleteBtnStyle} isDisabled={false} onClick={onDeleteButtonClick}></ActionButton>
    </div>
  );
}

export default ToDoItem;
