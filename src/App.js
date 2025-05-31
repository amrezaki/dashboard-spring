import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Header from './header';
import UserList from './UserList';
import AddUserForm from './AddUserForm';
function App() {
  return (
      <Router>
      <div className='grid-container'>
        <Header />
        <Sidebar />
        <main className="main-content">
          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/users" element={<UserList />} />
  <Route path="/add-user" element={<AddUserForm />} />
</Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
