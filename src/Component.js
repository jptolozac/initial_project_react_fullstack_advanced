import React, { useState } from "react";

function Component() {
  const [text, setText] = useState();
  const [updated, setUpdated] = useState();

  const textOnChange = (event) => {
    setText(event.target.value)
  }
  const buttonOnClick = (event) => {
    setUpdated(text)
  }

  return (
    <div>
      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={buttonOnClick}>Actualizar</button>
      <p>Texto Input: {text}</p>
      <p>Texto Actualizado: {updated}</p>
    </div>
  );
}

export default Component;

// rfc
