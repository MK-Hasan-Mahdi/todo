import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendars from './Components/Calendar';
import CompletedTasks from './Components/CompletedTasks';
import Home from './Components/Home';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import Todo from './Components/Tasks/Todo';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/completedtasks' element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path='/calendar' element={<Calendars></Calendars>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
