import { Button, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';

export const Favorite = () => {
      const [color, setColor] = useState("red");
 return (
    <>
      <Typography color={color}>My favorite color is {color}!</Typography>
      <Button
        type="Button"
        onClick={() => setColor("blue")}
      >Blue</Button>
      <Button
        type="Button"
        onClick={() => setColor("red")}
      >Red</Button>
      <Button
        type="Button"
        onClick={() => setColor("pink")}
      >Pink</Button>
      <Button
        type="Button"
        onClick={() => setColor("green")}
      >Green</Button>
    </>
  );
}

