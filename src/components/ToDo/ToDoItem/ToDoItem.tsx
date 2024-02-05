import React from 'react';
import ActionButton from '../../shared/ActionButton';

export interface ToDo {
  id: string;
  name: string;
  isCompleted: boolean;
}

export interface ToDoUpdate {
  name: string;
  isCompleted: boolean;
}

export interface ToDoItemProps {
  name: string;
  isCompleted: boolean;
  onDeleteButtonClick: () => void;
  onDoneButtonClick: () => void;
}

export enum ButtonStyleEnum {
  COMPLETED_TEXT = 'w-full line-through text-green',
  PENDING_TEXT = 'w-full text-grey-darkest',
  COMPLETE_BTN = 'flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green',
  DELETE_BTN = 'flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red'
}

function ToDoItem({ name, isCompleted, onDoneButtonClick, onDeleteButtonClick }: ToDoItemProps): JSX.Element {
  return (
    <div className="flex mb-4 items-center">
      <p className={isCompleted ? ButtonStyleEnum.COMPLETED_TEXT : ButtonStyleEnum.PENDING_TEXT}>{name}</p>
      <ActionButton
        text={isCompleted ? 'Reset' : 'Done'}
        isDisabled={false}
        style={ButtonStyleEnum.COMPLETE_BTN}
        onClick={onDoneButtonClick}></ActionButton>
      <ActionButton text="Delete" style={ButtonStyleEnum.DELETE_BTN} isDisabled={false} onClick={onDeleteButtonClick}></ActionButton>
    </div>
  );
}

export default ToDoItem;
