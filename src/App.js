import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './assets/css/style.css';
import './assets/css/style2.css';
import { Dashboard } from './pages/admin/dashboard';
import { ListHouses } from './pages/admin/listHouses'; 
import { Home } from './pages/user/home';
import { AdminLogin } from './pages/admin/adminLogin';
import { AdminProtected } from './components/admin/protected';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />


        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/" element={
          <AdminProtected>
            <Dashboard />
          </AdminProtected>
          } />
        <Route path="/admin/houses" element={
          <AdminProtected>
            <ListHouses />
          </AdminProtected>
        } />
      </Routes>
    </Router>
  );
}

export default App;
