import React from "react";
import { Helmet } from "react-helmet";

export const SEO = () => {
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>Salman Khan - Web-Application Developer</title>
        <meta name="description" content="Full-Stack Developer" />
        {/* <meta name="image" content={image} />
            <link rel="canonical" href={url} /> */}
      </Helmet>
    </>
  );
};
