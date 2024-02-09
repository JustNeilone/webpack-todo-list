import { configureStore } from '@reduxjs/toolkit';
import { todosAdapter, todoReducer } from './todoSlice';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {todos: ToDoState}
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});

export const { selectAll: allToDos } = todosAdapter.getSelectors<RootState>((state) => state.todos);
