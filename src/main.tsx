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
  ARCHIVED_NOTES_PATH,
  DETAIL_NOTES_PATH,
  HOME_PATH,
  LOGIN_PATH,
  NOTES_PATH,
  REGISTER_PATH,
} from "./utils/constant.ts";
import { ModalsProvider } from "@mantine/modals";
import "@mantine/notifications/styles.css";

const router = createBrowserRouter([
  {
    path: HOME_PATH,
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
    element: <NotesPage type="active" />,
  },
  {
    path: DETAIL_NOTES_PATH,
    element: <DetailPage />,
  },
  {
    path: ARCHIVED_NOTES_PATH,
    element: <NotesPage type="archive" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <RouterProvider router={router} />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);
