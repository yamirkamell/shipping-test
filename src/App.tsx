import Home from './pages/home';
import Login from './pages/login';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ProtectedRoute } from './components/protected-route';
import Register from './pages/register';

const App = () => {
  
  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Routes>
        <Route path="*" element={<Navigate to={"/login"} replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;