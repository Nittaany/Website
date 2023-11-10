import React from "react";
import Navbar from "@/app/components/navbar/index";
import Footer from "@/app/footer";
import "@/app/globals.css";

const About = () => {
  return (
    <div className="relative bg-blue-900 p-4">
      <Navbar className="py-2" />

      <div className="mx-auto max-w-screen-lg p-4">
        <h1 className="text-4xl font-bold mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Hello, I'm Satyam Chaudhary.
        </h1>

        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
          I'm a Computer Science student from Nepal, currently studying at SRM
          University in Chennai. Web development is my forte, and I'm passionate
          about creating user-friendly interfaces. Beyond coding, I'm an avid
          traveler and love exploring new places.
        </p>

        <div className="mb-8 animate__animated animate__fadeIn animate__delay-3s">
          <h2 className="text-2xl font-bold mb-4">
            Extra Curricular Activities and Co Curricular Activities
          </h2>
          <ul className="list-disc pl-4">
            <li>Social Media Coordinator - [Futurix - C.tech Association]</li>
            <li>Committee Member - [Aaruush]</li>
            <li>PEC - [Yuddhhame]</li>
          </ul>
        </div>

        <div className="mb-8 animate__animated animate__fadeIn animate__delay-4s">
          <h2 className="text-2xl font-bold mb-4">Sem Wise GPA</h2>
          <p className="text-lg">
            Semester 1 GPA: 7.36
            <br />
            Semester 2 GPA: 9.05
          </p>
        </div>

        <div className="mb-8 animate__animated animate__fadeIn animate__delay-5s">
          <h2 className="text-2xl font-bold mb-4">
            Hackathon / Coding Competitions
          </h2>
          <ul className="list-disc pl-4">
            <li>MAKEATHON 5</li>
            <li>TECH-Q QUIZ CONTEST</li>
            <li>OODP HACK'23</li>
            <li>CODE FEST</li>
            <li>SRM CODING COMPETITION</li>
          </ul>
        </div>

        <div className="mb-8 animate__animated animate__fadeIn animate__delay-6s">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc pl-4">
            <li>Problem Solving ★★★★★</li>
            <li>CPP ★★★★★</li>
            <li>C language ★★★★★</li>
            <li>Python ★★★★★</li>
          </ul>
        </div>
      </div>

      <Footer className="py-2" />
    </div>
  );
};

export default About;
