import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const MatchItem = ({
  time,
  entryFee,
  odds,
  limitedAmmo,
  playerMode,
  totalPlayers,
  map_type,
  prizePool,
}) => {
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(100);
  const scaleAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.matchContainer,
        {
          opacity: fadeAnim,
          transform: [{ translateX: slideAnim }, { scale: scaleAnim }],
        },
      ]}
    >
      <View style={styles.matchHeader}>
        <Image
          style={styles.thumbnail}
          source={require("../../assets/images/free.jpg")}
        />
        <Text style={styles.matchTitle}>Freefire Full Match</Text>
        <Text>Limited Ammo: {limitedAmmo}</Text>
      </View>

      <View style={styles.matchBody}>
        <View style={styles.row}>
          <Text>Player Mode: {playerMode}</Text>
          <Text>Total Players: {totalPlayers}</Text>
        </View>

        <View style={styles.mapContainer}>
          <Text style={styles.mapTitle}>MAP:</Text>
          <Text style={styles.mapType}>{map_type}</Text>
        </View>

        <View style={styles.mapImages}>
          {[1, 2, 3].map((item, index) => (
            <Animated.Image
              key={index}
              source={require("../../assets/images/map1.png")}
              style={[
                styles.mapImage,
                {
                  transform: [
                    {
                      scale: scaleAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.5, 1],
                      }),
                    },
                  ],
                },
              ]}
            />
          ))}
        </View>

        <View style={styles.prizeContainer}>
          <Text>
            Winner: <Text style={styles.highlight}>Top 3</Text>
          </Text>
          {odds && (
            <Text>
              Odds:
              <Text style={styles.highlight}> {odds.top3}x</Text>
              <Text style={styles.highlight}> {odds.top15}x</Text>
            </Text>
          )}
        </View>

        <Text>Prize Pool: ₹{prizePool}</Text>
        <Text style={styles.rulesNote}>
          Note: Click Here to see rules of the full map
        </Text>
      </View>
    </Animated.View>
  );
};

const FullMapMatches = () => {
  const [selectedGroup, setSelectedGroup] = useState("Solo Match");
  const [selectedTime1, setSelectedTime1] = useState("6:00 pm");
  const [selectedTime2, setSelectedTime2] = useState("9:00 am");

  const matches = [
    { time: selectedTime1, entryFee: "free", odds: null },
    { time: selectedTime2, entryFee: 20, odds: { top3: 2.5, top15: 1.5 } },
  ];

  return (
    <ScrollView style={styles.container}>
      <Animated.Text style={styles.header}>FULL MAP MATCHES</Animated.Text>

      <Text style={styles.note}>
        Note: All matches are played daily at the same time
      </Text>

      <View style={styles.pickerContainer}>
        <Text>Select Group:</Text>
        <Picker
          selectedValue={selectedGroup}
          onValueChange={setSelectedGroup}
          style={styles.picker}
        >
          <Picker.Item label="Solo Match" value="Solo Match" />
        </Picker>
      </View>

      {matches.map((match, index) => (
        <MatchItem
          key={index}
          time={match.time}
          entryFee={match.entryFee}
          odds={match.odds}
          limitedAmmo="Yes"
          playerMode="Solo"
          totalPlayers={48}
          map_type="Random"
          prizePool={45}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
  },
  note: {
    color: "#FF4444",
    textAlign: "center",
    marginBottom: 20,
  },
  pickerContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    elevation: 3,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  matchContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  matchHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  matchTitle: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
  },
  matchBody: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  mapContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  mapTitle: {
    fontWeight: "bold",
    marginRight: 10,
  },
  mapType: {
    color: "#666",
  },
  mapImages: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  mapImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  prizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  highlight: {
    backgroundColor: "#B3E5FC",
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  rulesNote: {
    color: "#FF4444",
    marginTop: 10,
  },
});

export default FullMapMatches;
