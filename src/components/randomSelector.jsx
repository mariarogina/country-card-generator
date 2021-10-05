import React from "react";
import Country from "./Country";
import { useState } from "react";

export default function RandomSelector(props) {
  const rowList = props.list;

  const [randItem, setRandItem] = useState(rowList[1]);

  const returnCountry = () => {
    var i = parseInt(Math.random() * (rowList.length - 1));
    setRandItem(rowList[i]);
  };

  return (
    <div className="back" id="root">
      <div className="centered">
        <h1 className="cardStyle" style={{backgroundColor:"#d6f5d6", color:"#626258"}}>Random Country Card</h1>
        <br />

        <h2>Total number of cards: {rowList.length}</h2>
        <br />

        <button className="btn btn-success" style={{width:"200px", fontSize:"1.4rem"}}onClick={returnCountry}>
          Pick a country
        </button>
        <br />
        <br />
        <div className="centered">
          {randItem === "" ? null : <Country item={randItem} />}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
