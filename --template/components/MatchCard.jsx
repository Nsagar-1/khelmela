import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const MatchCard = (item) => (
  <Animated.View style={styles.card}>
    <LinearGradient
      colors={["#0f0c29", "#302b63", "#24243e"]}
      style={styles.gradient}
    >
      <View style={styles.cardContent}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{item?.matchType} Battle</Text>
          <Image
            source={require("../assets/images/free.jpg")}
            style={styles.gameIcon}
          />
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.text}>🎮 Mode:{item.a} </Text>
            <Text style={styles.text}>
              🔫 Guns:{item.gunAtrribute.toString()}
            </Text>
            <Text style={styles.text}>
              🎯 Headshot: {item.headshot.toString()}
            </Text>
            <Text style={styles.text}>🗺️ Map: Bermuda</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.text}>💥 Limited Ammo:{item.limitedAmmo}</Text>
            <Text style={styles.text}>🔄 Rounds:{item.round} </Text>
            <Text style={styles.text}>💰 Coin: {item.coin} </Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.footer}>
          <Text style={styles.text}>👾 Opponent: ???</Text>
          <View style={styles.footerRow}>
            <Text style={styles.prizeText}>
              🏆 Prize: {item.prize * 2 - 0.2 * item.prize}
            </Text>
            <Text style={styles.entryText}> Entry: {item.entryFee}</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  </Animated.View>
);

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  gradient: {
    padding: 20,
    borderRadius: 15,
  },
  cardContent: {
    padding: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gameIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  column: {
    flex: 1,
    padding: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  text: {
    fontSize: 14,
    color: "#ddd",
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#444",
    marginVertical: 10,
  },
  footer: {
    marginTop: 10,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prizeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFD700",
  },
  entryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "lightgreen",
  },
});

export default MatchCard;
