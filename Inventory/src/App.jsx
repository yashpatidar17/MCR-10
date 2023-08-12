import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Sidebar } from "./Component/Sidebar/Sidebar";
import { Department } from "./Pages/Department/Department";
import { Products } from "./Pages/Products/Products";
import { Product } from "./Pages/Product/Product";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:ID" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
