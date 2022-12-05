import logo from './logo.svg';
import './App.css';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


import { Home } from './pages/home/home'
import { User } from './pages/user/user'

function App() {
  return (

    <BrowserRouter>
      <div className='container '>

        <nav>
          <Link to="">Home</Link>  {"|"}
          <Link to="/user">User</Link>
        </nav>
        <Routes>

          <Route path='' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path="*" element={<h4>PageNotFound</h4>} />
        </Routes>


      </div>
    </BrowserRouter>



  );
}

export default App;
