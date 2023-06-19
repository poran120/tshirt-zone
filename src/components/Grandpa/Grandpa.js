import React, { useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const OrnamentContext = React.createContext("Diamond");

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "Diamond";

  const byHouse = () => {
    const newHouse = house + 1;
    setHouse(newHouse);
  };
  return (
    <OrnamentContext.Provider value={ornament}>
      <div className="grandpa_container">
        <h4>Grandpa is here</h4>
        <p>{house}</p>
        <button onClick={byHouse}>By House</button>

        <section className="grandpa_child">
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </OrnamentContext.Provider>
  );
};

export default Grandpa;
