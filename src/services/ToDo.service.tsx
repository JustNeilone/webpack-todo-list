import { v4 as uuidv4 } from 'uuid';
import { ToDo, ToDoUpdate } from '../components/ToDo/ToDoItem/ToDoItem';
import mockData from '../mockData';

const todoService = {
  getAllToDos: async (): Promise<ToDo[] | null> => {
    // run db query
    return mockData;
  },
  createToDo: async (payload: Omit<ToDo, 'id'>): Promise<ToDo> => {
    // run db query, create and call firebase service
    const idFromDb = uuidv4();
    const newToDo: ToDo = { id: idFromDb, ...payload };
    return newToDo;
  },
  updateToDo: async (changes: ToDoUpdate, id: string): Promise<ToDo> => {
    // run db query
    const queryId = id;
    const updatedToDo = changes;
    return { id: queryId, name: updatedToDo.name, isCompleted: updatedToDo.isCompleted };
  },
  deleteToDo: async (id: string): Promise<string> => {
    // run db query
    const deletedId = id;
    return deletedId;
  }
};

export default todoService;
