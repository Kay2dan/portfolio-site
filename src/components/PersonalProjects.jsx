import React from "react";

const projectsData = [
  {
    name: "Come To Salah",
    link: "",
    img: "",
    imgAlt: "",
    description: [
      "a random bunch of text",
      "a random bunch of text",
      "a random bunch of text",
    ],
  },
  {
    name: "Come To Salah",
    link: "",
    img: "",
    imgAlt: "",
    description: [
      "a random bunch of text",
      "a random bunch of text",
      "a random bunch of text",
    ],
  },
  {
    name: "Come To Salah",
    link: "",
    img: "",
    imgAlt: "",
    description: [
      "a random bunch of text",
      "a random bunch of text",
      "a random bunch of text",
    ],
  },
];

export const PersonalProjects = () => {
  return (
    <section className="section">
      <h2 className="title is-2">Personal Projects:</h2>
      <div className="cardsAlign">
        {projectsData.map((project, i) => {
          return (
            <div className="card" key={i}>
              <div className="card-image">
                <figure className="image is-4by5">
                  <img src={project.img} alt={project.imgAlt} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                  </div>
                </div>
              </div>
              <div className="content">
                {project.description.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
