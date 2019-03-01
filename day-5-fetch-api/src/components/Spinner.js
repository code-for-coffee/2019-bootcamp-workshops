import React from "react";

/**
 * Stateless component; only gets props and renders.
 * These can be pure functions since they only accept props.
 */
const Spinner = props => {
  return (
    <section>
      <div className="spinner" />
    </section>
  );
};

export default Spinner;
