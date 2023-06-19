import React, { useContext } from "react";
import { OrnamentContext } from "../Grandpa/Grandpa";

const Special = () => {
  const ring = useContext(OrnamentContext);

  return (
    <div>
      <h5>My special one</h5>
      <p>Gift from Grandpa: {ring}</p>
    </div>
  );
};

export default Special;
