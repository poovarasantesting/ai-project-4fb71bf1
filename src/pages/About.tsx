import React from "react";
import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        
        <div className="max-w-3xl space-y-6">
          <p className="text-lg">
            Welcome to our platform! We're dedicated to providing innovative solutions that help our users achieve their goals.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8">Our Mission</h2>
          <p>
            Our mission is to create intuitive, powerful tools that empower people to work smarter, not harder. We believe in combining cutting-edge technology with thoughtful design to solve real-world problems.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8">Our Team</h2>
          <p>
            We're a diverse group of passionate individuals with expertise in development, design, and user experience. Together, we work to build products that make a difference.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
          <p>
            Have questions or suggestions? We'd love to hear from you! Reach out to us at <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
}