import React from "react";
import Beaches from "../components/Beaches";
import { beaches, mountains, waterfalls,icebergs } from "../data";

import Card from "../components/Card";

const Allpopularplaces = ({ beaches, mountains }) => {
  return (
    <>
      {beaches.map((beach) => {
        return (
          <div>
            <Card key={beach.id} beach={beach} />
          </div>
        );
      })}

      {mountains.map((mountain) => {
        return (
          <div>
            <Card key={mountain.id} beach={mountain} />
          </div>
        );
      })}

      {waterfalls.map((waterfall) => {
        return (
          <div>
            <Card key={waterfall.id} beach={waterfall} />
          </div>
        );
      })}

      {icebergs.map((iceberg) => {
        return (
          <div>
            <Card key={iceberg.id} beach={iceberg} />
          </div>
        );
      })}
    </>
  );
};

export default Allpopularplaces;
