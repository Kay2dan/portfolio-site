import React from "react";

const professional = [
  {
    period: "2020",
    title: "Software Engineer",
    company: "Borrow A Boat Ltd.",
  },
  {
    period: "2020",
    title: "Software Engineer",
    company: "Borrow A Boat Ltd.",
  },
  {
    period: "2020",
    title: "Software Engineer",
    company: "Borrow A Boat Ltd.",
  },
  {
    period: "2020",
    title: "Software Engineer",
    company: "Borrow A Boat Ltd.",
  },
];

export const ProfessionalHistory = () => {
  return (
    <section className="section">
      <h2 className="title is-2">Professional History:</h2>
      <div className="columns is-multiline">
        {professional.map((job, i) => {
          return (
            <>
              <h3 className="column is-offset-2 is-2">2020</h3>
              <div className="column is-6 title is-4">Software Engineer</div>
              <div className="column is-2">Borrow A Boat Ltd.</div>
            </>
          );
        })}
      </div>
    </section>
  );
};
