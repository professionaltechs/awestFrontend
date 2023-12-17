import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/style2.css";
import { Dashboard } from "./pages/admin/dashboard";
import { ListHouses } from "./pages/admin/listHouses";
import { Home } from "./pages/user/home";
import { AdminLogin } from "./pages/admin/adminLogin";
import { AdminProtected } from "./components/admin/protected";
import { EditModal } from "./components/admin/EditModal";
import { CreateUser } from "./pages/admin/createUser";
import { CustomerData } from "./pages/admin/customerData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/"
          element={
            <AdminProtected>
              <Dashboard />
            </AdminProtected>
          }
        />
        <Route
          path="/admin/houses"
          element={
            <AdminProtected>
              <ListHouses />
            </AdminProtected>
          }
        />
        <Route
          path="/admin/create-customer"
          element={
            <AdminProtected>
              <CreateUser />
            </AdminProtected>
          }
        />
        <Route
          path="/admin/customer-list"
          element={
            <AdminProtected>
              <CustomerData />
            </AdminProtected>
          }
        />
        <Route
          path="/admin/edithouse"
          element={
            <AdminProtected>
              <EditModal />
            </AdminProtected>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
