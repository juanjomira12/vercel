import React, { useState, useEffect } from "react";

export default function Reloj() {

  const [hora, setHora] = useState(new Date());

  useEffect(() => {

    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);

  }, []);

  return (
    <div>

      <h2>Hora actual: {hora.toLocaleTimeString()}</h2>

    </div>
  );
}