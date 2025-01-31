
import { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getData } from "@/config/dataFlow";
import GameCard from "@/components/gameCard";

const GameList = () => {
  const [games, setGames] = useState([]); // Explicitly define type

  useEffect(() => {
      const fetchData = async () =>{
        const data = await getData("matchCard");
        setGames(data);
      };
      fetchData()
  }, []); // Run only once when the component mounts
  
  console.log(games)
  return (<Text> Hello There ?</Text>

  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#f4f4f4",
    },
    header: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
  });
  
  export default GameList;
  
