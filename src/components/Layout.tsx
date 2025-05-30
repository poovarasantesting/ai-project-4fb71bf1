import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-xl font-semibold">MCP Server</h1>
        </div>
      </header>
      <main className="container px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}