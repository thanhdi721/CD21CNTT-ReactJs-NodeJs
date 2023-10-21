import axios from "axios";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/index";
import { useEffect } from "react";
import DefaultComponents from "./components/DefaultComponent/DefaultComponent";

function App() {
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const res = await axios.get(
      `${process.env.REACT_API_URL_BACKEND}/product/get-all`
    );
    console.log("res", res);
  };

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.IsShowHeader ? DefaultComponents : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
