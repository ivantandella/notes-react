import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme.ts";
import LoginPage from "./pages/login.tsx";
import RegisterPage from "./pages/register.tsx";
import NotesPage from "./pages/notes.tsx";
import DetailPage from "./pages/detail.tsx";
import {
  DETAIL_NOTES_PATH,
  LOGIN_PATH,
  NOTES_PATH,
  REGISTER_PATH,
} from "./utils/constant.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: LOGIN_PATH,
    element: <LoginPage />,
  },
  {
    path: REGISTER_PATH,
    element: <RegisterPage />,
  },
  {
    path: NOTES_PATH,
    element: <NotesPage />,
  },
  {
    path: DETAIL_NOTES_PATH,
    element: <DetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
