import {Routes, Route} from 'react-router-dom';
import Calendar from './Components/Calendar';
import CompletedTask from './Components/CompletedTask';
import Home from './Components/Home';
import MyTask from './Components/MyTask';
import Nav from './Components/Nav';
import To_Do from './Components/To_Do';

function App() {
  return (
    <div className="">
      <Nav/>
      <h1 className='text-blue-400 text-center font-bold'>Welcome to Task Management App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<MyTask />} />
        <Route path="/completed" element={<CompletedTask />} />
        <Route path="/todo" element={<To_Do/>} />
        <Route path="/calendar" element={<Calendar/>} />
      </Routes>
    </div>
  );
}

export default App;
