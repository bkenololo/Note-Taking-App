import NotesPage from "../pages/NotesPage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link className="text-plain-white" to='/'>Home</Link>
          </li>
          <li>
            <Link className="text-plain-white" to='/login'>Login</Link>
          </li>
          <li>
            <Link className="text-plain-white" to='/signup'>Signup</Link>
          </li>
          <li>
            <Link className="text-plain-white" to='/logout'>Logout</Link>
          </li>
        </ul>
        
        <Routes>
          <Route index element={<RequireAuth><NotesPage /></RequireAuth>}/>
          <Route path='/login' element={<LogInPage />}/>
          <Route path='/signup' element={<SignUpPage />}/>
          <Route path='/logout' element={<LogoutPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
