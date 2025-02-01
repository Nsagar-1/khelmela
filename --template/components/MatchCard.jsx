import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MatchCard = ({ data }) => {
  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/free.jpg")}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Free Fire:CS Match</Text>
      </View>

      {/* Map Image */}
      <Image
        source={require("../assets/images/map1.png")}
        style={styles.mapImage}
      />

      {/* Match Details */}
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Limited ammo:</Text>
          <Text style={styles.value}>{data.limitedAmmo}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Player mode:</Text>
          <Text style={styles.value}>{data.playerMode}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Round-</Text>
          <Text style={styles.value}>{data.round}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Gun attributes:</Text>
          <Text style={styles.value}>{data.gunAttributes}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Coin:</Text>
          <Text style={styles.value}>{data.coin}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Headshot only:</Text>
          <Text style={styles.value}>{data.headshotOnly}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Map:</Text>
          <Text style={styles.value}>{data.map}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Opponent Player:</Text>
          <Text style={styles.value}>{data.opponentPlayer}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Win Prize:</Text>
          <Text style={styles.value}>{data.winPrize}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Entry:</Text>
          <Text style={styles.value}>{data.entry}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 15,
    padding: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    paddingBottom: 10,
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  mapImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  details: {
    marginTop: 10,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },
  label: {
    color: "#aaa",
    fontSize: 15,
  },
  value: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
});

// Example data object
const matchData = {
  limitedAmmo: "Yes",
  playerMode: "1vs1",
  round: "13",
  gunAttributes: "Yes",
  coin: "9950",
  headshotOnly: "No",
  map: "Bermuda",
  opponentPlayer: "Raiden",
  winPrize: "190",
  entry: "100",
};

export default function App() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#121212" }}
    >
      <MatchCard data={matchData} />
    </View>
  );
}
