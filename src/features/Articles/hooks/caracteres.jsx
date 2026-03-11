import React, { useState } from "react";

export function ContadorCara() {

  const [texto, setTexto] = useState("");

  return (
    <div>

      <h3>Escribe algo:</h3>

      <textarea
        rows="4"
        cols="30"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <p>Caracteres: {texto.length}</p>

    </div>
  );
}