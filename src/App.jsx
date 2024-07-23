import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import AddJobPage from "./pages/AddJobPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { JobLoader } from "./pages/Jobpage";

const App = () => {
  const addJob = () => {};

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<MainLayout />}>
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="/jobs"
          element={<JobsPage />}
        />
        <Route
          path="/add-job"
          element={<AddJobPage addJob={addJob} />}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage />}
          loader={JobLoader}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
