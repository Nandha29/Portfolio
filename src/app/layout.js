// components/Layout.js
`use client`;
import React from "react";
import Sidebar from "./pages/sidebar/page";
import "./globals.css";

const Layout = ({ children }) => {
  return (
    <html>
      <body className="bg-gray-100">
        <div class="min-h-screen flex flex-col">
          <header class="bg-gray-800 text-white p-4">
            <h1>My App</h1>
          </header>
          <div class="flex flex-1">
            <aside class=" bg-gray-200">
              <Sidebar />
            </aside>
            <main class="flex-1 bg-white p-4">{children}</main>
          </div>
          <footer class="bg-gray-800 text-white p-4">
            <p>Footer content</p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
