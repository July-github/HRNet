import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/index';
import Employees from './pages/Employees/index';
import EmployeeCreation from './pages/EmployeeCreation/index';
import Error from './pages/Error/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
          <Route path='/employees' element={<Employees/>}></Route>
          <Route path='/employee_creation' element={<EmployeeCreation/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
