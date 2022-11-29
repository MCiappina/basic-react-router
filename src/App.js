import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* vite script for starting a react application -> another option */}
      Welcome to the app route
      <Link to="/user">User page</Link>
      <Link to="/posts">Posts page</Link>
    </div>
  );
}

export default App;
