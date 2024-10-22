/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Pokedex Web Application 🐿️",
    description:
      "A web-based application built with React that allows users to search for, view, and learn about various Pokémon, including their types, abilities, and stats. This project leverages an external API for real-time Pokémon data and provides an interactive user experience.",
    url: "https://anirban010-pokedex.netlify.app", 
  },
  {
    title: "Better.com Replica Project 🌐",
  description:
    "A project that replicates key pages of the Better.com website using React. This involved creating a responsive design that closely mimics the original site’s functionality and layout.",
  url: "https://better-anirbanbhunias-projects.vercel.app",
  },
  {
    title: "ToDo Application ✅",
  description:
    "A simple and intuitive ToDo application that allows users to create, edit, and delete tasks. This project focuses on providing a user-friendly interface and efficient task management.",
  url: "https://abxn-todo.netlify.app",
  },
  {
    title: "Currency Converter Application 💱",
  description:
    "A web application that allows users to convert amounts between different currencies using real-time exchange rates. This project emphasizes accuracy and user-friendly design.",
  url: "https://currency-converter0abxn.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
