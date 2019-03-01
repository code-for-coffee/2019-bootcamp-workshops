import React from "react";

const Pokemon = ({ data }) => {
  console.log("PokeomonComponent render()", data);

  const { name, base_experience, sprites } = data;

  let formattedHeader = `${name[0].toUpperCase()} is for ${name}!`;

  return (
    <section>
      <hgroup>
        <h1>{formattedHeader}</h1>
      </hgroup>
      <p>
        <strong>Name: </strong> {name}
      </p>
      <p>
        <strong>Base XP: </strong> {base_experience}
      </p>
      <p>
        <img src={sprites.front_default} alt="pokemon sprite" />
      </p>
    </section>
  );
};

export default Pokemon;
