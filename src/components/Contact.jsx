import React from "react";

export const Contact = () => {
  return (
    <div>
      <form
        className="kwes-form"
        action="https://kwes.io/api/foreign/forms/nl7fF4Ju9iWYesMBYstq">
        <figure>
          <label for="contact">Your message:</label>
        </figure>
        <textarea
          className="textarea"
          name="contact"
          maxLength="750"
          rules="required|max:255"
        />
        <button className="button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};
