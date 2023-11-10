import React from "react";
import Navbar from "@/app/components/navbar/index";
import Footer from "@/app/footer";
import ProjectCard from "@/app/ProjectCard";
import "@/app/globals.css";

const projects = [
  {
    title: "First Website",
    description:
      "A personal introduction website created using HTML and CSS at the beginning of my web development journey.",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1_irreLjG6MnBea3XXhY7fIxWD7Yq7Gzh",
    // https://drive.google.com/file/d/1_irreLjG6MnBea3XXhY7fIxWD7Yq7Gzh/view?usp=sharing
    linkUrl: "https://nittaany.github.io/newme/",
  },
  {
    title: "Mann Mauji",
    description:
      "This website serves as a platform to publicize an app, providing detailed information about its features and offering download links. Developed using HTML and CSS.",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1JKxE3lJNRzW31bYeQExGtsPB5hMdAQU1",
    linkUrl: "https://nittaany.github.io/MM/",
  },
  {
    title: "E-Waste Locator",
    description:
      "A project developed during Smart India Hackathon (SIH'23) by our team. It tracks local E-waste disposal areas and features an interactive chatbot for information about E-waste. Built with Next.js.",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=15nuDws4fk6dbiucH99Uv3auI1yOYIqgV",
    linkUrl: "https://zenith-sih-1392.vercel.app/",
  },
  {
    title: "ATM Banking System",
    description:
      "A basic C-language mini-project created as part of my learning journey.",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1BkEDzr0g3TrvLQhyFBS2042V0jdBdLxu",
    linkUrl: "https://example.com/project4",
  },
  {
    title: "Car Rental System",
    description:
      "A basic car rental system mini-project developed during my journey of learning C++.",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Wtw2XU04tGmTMWof8aT5kQaO9vbZ0rgJ",
    linkUrl: "https://example.com/project5",
  },
  {
    title: "Weather App",
    description:
      "A clean weather app created using Python Tkinter with API integration for live updates.",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1V5nYzn0a5BEH-g6ZjgL8qBb8gtLXohsD",
    linkUrl: "https://example.com/project6",
  },
  {
    title: "PDM - Expense Management",
    description:
      "A basic Java project utilizing Java Swing. It functions similar to the Splitwise app but with a different approach.",
    imageUrl: "/project7.jpg",
    linkUrl: "https://example.com/project7",
  },
  {
    title: "Micro-processor Based Water Level Controller",
    description:
      "A project based on Arduino Uno that monitors the water level in a tank and can control the pump accordingly.",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1hc6RkYuLSvmLPYgNpeEpWLmnh9gQjbId",
    linkUrl: "https://example.com/project8",
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid mx-auto max-w-screen-xl py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              linkUrl={project.linkUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
