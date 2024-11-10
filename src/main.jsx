import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import AppliedJobs from "./Components/Appliedjobs/Appliedjobs";
import Errorpages from "./Components/Errorpages/Errorpages";
import JobDetails from "./Components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpages></Errorpages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/applied', 
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('../public/jobs.json') // warning: only load the data you need. do not load all the data
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../public/jobs.json') 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
