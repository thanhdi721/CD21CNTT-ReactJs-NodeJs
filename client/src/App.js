import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import { routes } from "./routes/index";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((routes) => {
            const Page = routes.page;
            return <Route path={routes.path} element={<Page />} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
