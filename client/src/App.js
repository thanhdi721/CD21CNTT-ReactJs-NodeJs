import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/index";
import { useEffect } from "react";
import DefaultComponents from "./components/DefaultComponent/DefaultComponent";
import { isJsonString } from "./utils";
import jwt_decode from "jwt-decode";
import * as UserService from "./services/UserService";
function App() {
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
