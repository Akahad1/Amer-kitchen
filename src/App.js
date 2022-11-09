
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Router/Router';


function App() {
  return (
    <div data-theme="cupcake" className="App  max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

