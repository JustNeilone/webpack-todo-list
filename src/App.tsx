import React, { ReactElement } from 'react';
import ToDoDashboard from './components/ToDo/ToDoDashboard/ToDoDashboard';

function App(): ReactElement {
  return (
    <div className="bg-gray-500 h-screen relative isolate px-6 pt-14 mx-auto">
      <ToDoDashboard></ToDoDashboard>
    </div>
  );
}

export default App;
