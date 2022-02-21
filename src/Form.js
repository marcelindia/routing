import React, { useState } from "react";
function Form() {
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    console.log(name);
    e.preventDefault();
    //telling browser to prevent default acting from happening
    //e=event
  };
  return (
    <>
      <h1>Fill out your info or...</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type your name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
