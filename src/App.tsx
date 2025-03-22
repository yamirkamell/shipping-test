import { useSelector, useDispatch } from 'react-redux';
import { login } from './pages/login/state/authState';
import Home from './pages/home';

function App() {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      {isAuthenticated ? (
        <Home />
      ) : (
        <button onClick={() => dispatch(login({ name: "Jane Doe" }))}>Login</button>
      )}
    </div>
  );
}

export default App;