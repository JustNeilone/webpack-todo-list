import { Update, createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ToDo, ToDoUpdate } from '../components/ToDo/ToDoItem/ToDoItem';
import todoService from '../services/ToDo.service';

export const getAllToDosAsync = createAsyncThunk('todos/getAllToDosAsync', async () => {
  const todos = await todoService.getAllToDos();
  return todos;
});

export const addToDoAsync = createAsyncThunk('todos/addToDoAsync', async (payload: Omit<ToDo, 'id'>) => {
  const addedTodo = await todoService.createToDo(payload);
  return addedTodo;
});

export const updateToDoAsync = createAsyncThunk('todos/updateToDoAsync', async ({ changes, id }: Update<ToDoUpdate, string>) => {
  const payload: ToDoUpdate = { name: changes.name!, isCompleted: changes.isCompleted! };
  const updatedToDo = await todoService.updateToDo(payload, id);
  return updatedToDo;
});

export const deleteToDoAsync = createAsyncThunk('todos/deleteToDoAsync', async (payload: string) => {
  const deletedId = await todoService.deleteToDo(payload);
  return deletedId;
});

export const todosAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (todo: ToDo) => todo.id,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.id.localeCompare(b.name)
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToDoAsync.fulfilled, (state, action) => {
        if (!action.payload) return;
        todosAdapter.addOne(state, action.payload);
      })
      .addCase(updateToDoAsync.fulfilled, (state, action) => {
        if (!action.payload) return;
        todosAdapter.updateOne(state, {
          id: action.payload.id,
          changes: action.payload
        });
      })
      .addCase(deleteToDoAsync.fulfilled, (state, action) => {
        if (!action.payload) return;
        todosAdapter.removeOne(state, action.payload);
      })
      .addCase(getAllToDosAsync.fulfilled, (state, action) => {
        if (!action.payload) return;
        todosAdapter.addMany(state, action.payload);
      });
  }
});

export const todoReducer = todosSlice.reducer;
export const todoActions = todosSlice.caseReducers;
