import React, { createContext, useState } from 'react';
import { ToDo } from '../components/ToDoItem/ToDoItem';
import mockData from '../mockData';

export interface ToDoContext {
  newToDo: ToDo;
  toDoList: ToDo[];
  setToDo: (obj) => void;
  setToDoList: (obj) => void;
}

export const ToDoContext = createContext<ToDoContext>({
  newToDo: {
    name: '',
    isCompleted: false
  },
  toDoList: [],
  setToDo: () => {},
  setToDoList: () => {}
});

function ToDoProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [newToDo, setToDo] = useState<ToDo>({ name: '', isCompleted: false });
  const [toDoList, setToDoList] = useState<ToDo[]>([...mockData]);

  return (
    <ToDoContext.Provider
      value={{
        newToDo,
        toDoList,
        setToDo,
        setToDoList
      }}>
      {children}
    </ToDoContext.Provider>
  );
}

export default ToDoProvider;
