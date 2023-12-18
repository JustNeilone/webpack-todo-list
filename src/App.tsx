import React, { ReactElement } from 'react';
import ToDoProvider from './contexts/ToDoProvider';
import ToDoDashboard from './components/ToDoDashboard/ToDoDashboard';

function App(): ReactElement {
  return (
    <div className="bg-gray-500 h-screen relative isolate px-6 pt-14 mx-auto">
      <ToDoProvider>
        <ToDoDashboard></ToDoDashboard>
      </ToDoProvider>
    </div>
  );
}

export default App;
