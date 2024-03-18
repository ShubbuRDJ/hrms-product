import { BrowserRouter } from 'react-router-dom';
import MainRoute from './router/MainRoute';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <MainRoute/>
    </BrowserRouter>
  );
}

export default App;
