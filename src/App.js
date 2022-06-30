import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Shared/Navbar';
import AddTask from './Components/Tasks/AddTask';

function App() {
  return (
    <div className='mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addtask' element={<AddTask></AddTask>}></Route>
      </Routes>
    </div>
  );
}

export default App;
