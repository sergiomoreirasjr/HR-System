import './App.css';
import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom"

import CreateUser from './pages/CreateUser';
import ListUser from './pages/ListUser';
import UpdateUser from './pages/UpdateUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateUser />}/>
          <Route path="/list" element={<ListUser />} />
          <Route path="/update" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
