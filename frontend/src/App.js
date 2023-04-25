import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage";
import CreateInvoicePage from "./pages/CreateInvoicePage";
import CreateProductPage from "./pages/CreateProductPage";
function App() {
  return (
    <div className="App">
      {/* <Layout>
        <div className="ml-48">Hello</div>
      </Layout> */}
      <Routes>
        <Route path="/" element={<Layout></Layout>} />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path="/create-invoice"
          element={
            <Layout>
              <CreateInvoicePage />
            </Layout>
          }
        />
        <Route
          path="/create-product"
          element={
            <Layout>
              <CreateProductPage />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
