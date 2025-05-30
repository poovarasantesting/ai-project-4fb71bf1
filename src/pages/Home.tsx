import React from "react";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
        <p className="text-lg max-w-3xl">
          This is the home page of our application. We're glad you're here!
        </p>
      </div>
    </Layout>
  );
}