import { UUID } from 'crypto';
import { ToDo } from '../../components/ToDoItem/ToDoItem';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface UseToDoHook {
  createToDo: (toDoName: string) => void;
  updateToDoStatus: (id: UUID) => void;
  deleteToDo: (id: UUID) => void;
  items: ToDo[];
}

export const useToDo = (items: ToDo[]): UseToDoHook => {
  const [toDoList, setToDoList] = useState<ToDo[]>([...items]);

  const createToDo = (name): void => {
    setToDoList([...toDoList, { id: uuidv4(), name: name, isCompleted: false } as ToDo]);
  };

  const updateToDoStatus = (id: UUID): void => {
    const items: ToDo[] = [...toDoList];
    const updatedItems = items.map((t) => {
      if (t.id === id) t.isCompleted = !t.isCompleted;

      return t;
    });

    setToDoList(updatedItems);
  };

  const deleteToDo = (id: UUID): void => {
    // read how TS uses AS and IS and fix typings
    const items: ToDo[] = [...toDoList]; // fix as ToDo, do type checking
    const filteredItems = items.filter((t) => t.id !== id);
    setToDoList(filteredItems);
  };

  return { createToDo, updateToDoStatus, deleteToDo, items: toDoList } as const;
};
