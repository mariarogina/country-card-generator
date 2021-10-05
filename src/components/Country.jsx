import React from "react";

export default function Country(props) {
  return (
    <div className="col cardStyle">
      <h1>{props.item.name.common}</h1>
      <h2>Capital: {props.item.capital}</h2>

      <br />
      <p> <b>Languages:</b> {Object.values(props.item?.languages).join(", ")}</p>
      <p><b>Region:</b> {props.item?.region}</p>

      <img className="picStyle" src={props.item.flags?.png} />
    </div>
  );
}
