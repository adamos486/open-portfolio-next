import React from "react";
import Header from "@/components/Header";
import "../app/globals.css";

const Projects: React.FC = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <h1>Links of project posts here.</h1>
    </div>
  );
}

export default Projects;