import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="">
      <h1 className='text-blue-400 text-center font-bold'>My Task Management</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
