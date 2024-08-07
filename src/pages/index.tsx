import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../constants/routes";
import { Route as RouteType } from "../constants/interfaces";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route: RouteType, index: number) => {
          return (
            <Route key={index} element={route.component} path={route.route} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
