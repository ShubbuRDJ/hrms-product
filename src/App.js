import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoute from './router/MainRoute';
import { ToastContainer } from 'react-toastify';
import EditDataState from './app/context/editData/editDataState';

function App() {
  return (
    <BrowserRouter>
      <EditDataState>
      <ToastContainer/>
      <MainRoute/>
      </EditDataState>
    </BrowserRouter>
  );
}

export default App;
