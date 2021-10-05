import React, { useState, useEffect } from "react";
import RandomSelector from "./randomSelector";

export default function FetchCountry() {
  const [rowList, setRowList] = useState(null);
  
function createData(name, capital, languages, flags, region) {
    return { name, capital, languages, flags, region };
  }
  

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRowList(
          data.map((item) =>
            createData(item.name, item.capital, item.languages, item.flags, item.region)
          )
        );
      });
  }, []);

  if (!rowList) {
    return <div>Still Loading</div>;
  }

  console.log(rowList);

  return <RandomSelector list={rowList} />;
}