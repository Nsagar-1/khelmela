import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { createData, getData, updateData } from "../../config/dataFlow";
import FullMapMatches from "./freeFire_fullmap";

const App = () => {
  const fetchData = async () => {
    const result = await getData("matchCard");

    console.log(result);
  };
  fetchData();

  return (
    <>
      <FullMapMatches />
    </>
  );
};

export default App;
