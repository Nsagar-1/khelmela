import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameCard = ({ game }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Game: {game.game || "Unknown"}</Text>
      <Text>Round: {game.round || "N/A"}</Text>
      <Text>Player Mode: {game.playerMode || "N/A"}</Text>
      <Text>Entry Fee: {game.entryFee || "N/A"}</Text>
      <Text>Coin: {game.coin || "N/A"}</Text>
      <Text>Match Type: {game.matchType || "N/A"}</Text>
      <Text>Ammo Limited: {game.ammoLimited ? "Yes" : "No"}</Text>
      <Text>Creator: {game.creator || "Unknown"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GameCard;
