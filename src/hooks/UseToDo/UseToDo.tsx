import { ToDo } from '../../components/ToDoItem/ToDoItem';

export interface UseToDoHook {
  createToDo: (newItem: object) => ToDo;
  updateToDoStatus: (toDoName: string) => ToDo[];
  deleteToDo: (toDoName: string) => ToDo[];
}

export const useToDo = (props: ToDo[] | null): UseToDoHook => {
  const createToDo = (newItem): ToDo => {
    return { name: newItem.name, isCompleted: newItem.isCompleted } as ToDo;
  };

  const updateToDoStatus = (name: string): ToDo[] => {
    const updatedList: ToDo[] = [...(props as ToDo[])];
    return updatedList.map((t) => {
      if (t.name === name) t.isCompleted = !t.isCompleted;

      return t;
    });
  };

  const deleteToDo = (name: string): ToDo[] => {
    const updatedList: ToDo[] = [...(props as ToDo[])];
    return updatedList.filter((t) => t.name !== name);
  };

  // use tuple
  return { createToDo, updateToDoStatus, deleteToDo } as const;
};
