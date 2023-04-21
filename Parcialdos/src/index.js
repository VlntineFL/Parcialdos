import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./contex/UserProvider";
import { Post } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Post />
    </UserProvider>
  </React.StrictMode>
);

