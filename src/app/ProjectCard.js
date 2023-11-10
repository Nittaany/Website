import React from "react";
import styles from "@/app/globals.css";

const ProjectCard = ({ title, description, imageUrl, linkUrl }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <div
        className={`relative bg-gray-800 p-4 mb-8 shadow-lg rounded-lg ${styles.projectCard} hover:shadow-xl`}
        style={{ zIndex: 1 }}
      >
        <div className={styles.imageContainer}>
          <img
            src={imageUrl}
            alt={title}
            className="mb-4 rounded-md object-cover w-full h-40 md:h-60 lg:h-80 transition-transform transform hover:scale-120"
            style={{ transition: "transform 0.3s", zIndex: 1 }}
          />
        </div>
        <div className="bg-gray-900 p-4 rounded-md mt-4">
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <div
            className={`${styles.descriptionContainer} overflow-y-auto max-h-24`}
          >
            <p className="text-white mb-4">{description}</p>
          </div>
        </div>
        <div className={styles.hoverEffect}></div>
      </div>
    </a>
  );
};

export default ProjectCard;
