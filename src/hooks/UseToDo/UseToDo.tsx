import { ToDo, ToDoUpdate } from '../../components/ToDo/ToDoItem/ToDoItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Update } from '@reduxjs/toolkit';
import { allToDos } from '../../store/store';
import { addToDoAsync, deleteToDoAsync, updateToDoAsync, getAllToDosAsync } from '../../store/todoSlice';
import { useEffect } from 'react';

export interface UseToDoHook {
  createToDo: (toDoName: string) => void;
  updateToDoStatus: (id: string, payload: ToDo) => void;
  deleteToDo: (id: string) => void;
  items: ToDo[];
}

export const useToDo = (): UseToDoHook => {
  const dispatch = useAppDispatch();
  const items: ToDo[] = useAppSelector(allToDos);

  // fetching mock data for now, use for syncronization with external source / firebase later
  useEffect(() => {
    dispatch(getAllToDosAsync());
    return () => {
      /* cleanup/disconnect code */
    };
  }, [dispatch]);

  const createToDo = (name): void => {
    const todo: Omit<ToDo, 'id'> = { name: name, isCompleted: false };
    dispatch(addToDoAsync(todo));
  };

  const updateToDoStatus = (id: string, payload: ToDo): void => {
    const changes: ToDoUpdate = { name: payload.name, isCompleted: !payload.isCompleted };
    const update: Update<ToDoUpdate, string> = { changes: changes, id: id };
    dispatch(updateToDoAsync(update));
  };

  const deleteToDo = (id: string): void => {
    dispatch(deleteToDoAsync(id));
  };

  return { createToDo, updateToDoStatus, deleteToDo, items } as const;
};
