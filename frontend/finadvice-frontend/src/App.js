import Login from './components/login';
import { AuthProvider, useAuth } from './components/auth';
import { RequireAuth } from './components/RequireAuth';
import NavBar from './components/navbar';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/dashboard';
function App() {
  const auth = useAuth();
  return (
  <div className="App">
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}/>
      </Routes>
    </AuthProvider>
  </div>
  );
}

export default App;
