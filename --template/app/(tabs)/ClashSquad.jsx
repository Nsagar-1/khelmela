import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  TextInput,
  Pressable,
  View,
  StyleSheet,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import { MotiView, MotiText } from "moti";
import { AntDesign, Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { createData, getData } from "@/config/dataFlow";

import MatchCard from "../../components/MatchCard";

const ToggleButton = ({ label, isActive, onPress }) => (
  <Pressable
    onPress={onPress}
    style={[styles.toggleButton, isActive && styles.activeToggle]}
  >
    <MotiText
      animate={{ color: isActive ? "#fff" : "#000" }}
      transition={{ type: "timing", duration: 200 }}
    >
      {label}
    </MotiText>
  </Pressable>
);

const SelectorList = ({ data, activeId, onSelect, style }) => (
  <FlatList
    data={data}
    horizontal
    contentContainerStyle={[styles.selectorList, style]}
    renderItem={({ item }) => (
      <Pressable
        onPress={() => onSelect(item.id)}
        style={[
          styles.selectorItem,
          activeId === item.id && styles.activeSelector,
        ]}
      >
        <MotiText
          animate={{ color: activeId === item.id ? "#fff" : "#000" }}
          transition={{ type: "timing", duration: 200 }}
        >
          {item.label}
        </MotiText>
      </Pressable>
    )}
    keyExtractor={(item) => item.id.toString()}
  />
);

const ClashSquad = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDetail, setShowDetail] = useState(true);
  const [fetchData, setFetchData] = useState([]);
  const [formState, setFormState] = useState({
    matchType: "Clash Squad",
    date: "",
    gunAtrribute: false,
    players: "1v1",
    limitedAmmo: true,
    headshot: true,
    skill: true,
    rounds: 13,
    coin: "Default",
    matchName: "",
    bet: 0,
    roomName: "",
  });

  const roomName = useRef("");
  const [bet, setBet] = useState(10);
  const [activeIndexes, setActiveIndexes] = useState({
    player: 4,
    round: 3,
    coin: 1,
  });

  const playerOptions = [
    { id: 1, label: "1v1" },
    { id: 2, label: "2v2" },
    { id: 3, label: "3v3" },
    { id: 4, label: "4v4" },
  ];

  const roundOptions = [
    { id: 1, label: "7" },
    { id: 2, label: "9" },
    { id: 3, label: "13" },
  ];

  const coinOptions = [
    { id: 1, label: "Default" },
    { id: 2, label: "9999" },
  ];

  const handleFormUpdate = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const createMatches = () => {
    if (formState.bet < 10 || formState.bet > 150) {
      alert("Bet must be between 10 and 150");
    } else {
      const date = Date();

      setFormState((prev) => {
        const updatedState = {
          ...prev,
          date: date,
        };

        // Ensure the updated state is used in createData
        createData("matchCard", updatedState);

        return updatedState; // Update state correctly
      });

      setShowModal(false);
    }
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        const result = await getData("matchCard");
        await setFetchData(result);
        console.log(fetchData[0].rounds);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, [formState]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={styles.headerTitle}>Clash Squad Matches</Text>
      </View>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="menu-outline" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your match"
          placeholderTextColor="#666"
        />
        <FontAwesome5 name="search" size={20} color="black" />
      </View>
      <Text style={styles.note}>
        Note: All matches are made by host player not admin
      </Text>
      {/* Create Button */}
      <Pressable style={styles.createButton} onPress={() => setShowModal(true)}>
        <Ionicons name="add-circle-outline" size={24} color="black" />
        <Text style={styles.createButtonText}>Create</Text>
      </Pressable>
      {/* Live Matches */}
      <View style={styles.liveMatches}>
        <Entypo name="game-controller" size={24} color="black" />
        <Text style={styles.liveMatchesText}>Live Matches</Text>
      </View>
      <FlatList
        data={fetchData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MatchCard
            matchType={item.matchType}
            a={item.players}
            gunAtrribute={item.gunAtrribute.toString()}
            round={item.rounds}
            coin={item.coin}
            prize={item.bet}
            entryFee={item.bet}
            headshot={item.headshot}
          />
        )}
      />

      {/* 
      
      
      ***************** Creation Modal *****************
      
      
      
      */}

      {/* Creation Modal */}
      <Modal transparent visible={showModal} animationType="fade">
        <Pressable
          style={styles.modalBackdrop}
          onPress={() => setShowModal(false)}
        >
          <MotiView
            from={{ translateY: 300 }}
            animate={{ translateY: 0 }}
            transition={{ type: "spring", damping: 20 }}
            style={styles.modalContent}
          >
            <View style={styles.modalHandle} />

            <ScrollView contentContainerStyle={styles.modalScroll}>
              <Text style={styles.modalTitle}>Create your match</Text>

              {/* Mode Toggle */}
              <View style={styles.modeToggle}>
                <ToggleButton
                  label="Clash Squad"
                  isActive={showDetail}
                  onPress={() => {
                    setShowDetail(true);
                    handleFormUpdate("matchType", "clashSquad");
                  }}
                />
                <ToggleButton
                  label="Lone Wolf"
                  isActive={!showDetail}
                  onPress={() => {
                    setShowDetail(false);
                    handleFormUpdate("matchType", "clashSquad");
                  }}
                />
              </View>

              {/* Players Selector */}
              <FormSection title="Players">
                <SelectorList
                  data={playerOptions}
                  activeId={activeIndexes.player}
                  onSelect={(id) => {
                    setActiveIndexes((prev) => ({ ...prev, player: id }));
                    handleFormUpdate(
                      "players",
                      playerOptions.find((p) => p.id === id)?.label
                    );
                  }}
                />
              </FormSection>

              {/* Settings Toggles */}
              <FormSection title="Settings">
                <ToggleGroup
                  label="Limited Ammo"
                  value={formState.limitedAmmo}
                  onChange={(val) => handleFormUpdate("limitedAmmo", val)}
                />
                <ToggleGroup
                  label="Headshot"
                  value={formState.headshot}
                  onChange={(val) => handleFormUpdate("headshot", val)}
                />
                <ToggleGroup
                  label="Character Skill"
                  value={formState.skill}
                  onChange={(val) => handleFormUpdate("skill", val)}
                />

                <ToggleGroup
                  label="Gun Attribute"
                  value={formState.gunAtrribute}
                  onChange={(val) => handleFormUpdate("gunAtrribute", val)}
                />
              </FormSection>

              {/* Rounds Selector */}
              <FormSection title="Rounds">
                <SelectorList
                  data={roundOptions}
                  activeId={activeIndexes.round}
                  onSelect={(id) => {
                    setActiveIndexes((prev) => ({ ...prev, round: id }));
                    handleFormUpdate(
                      "rounds",
                      roundOptions.find((r) => r.id === id)?.label
                    );
                  }}
                />
              </FormSection>

              {/* Coin Selector */}
              <FormSection title="Coin">
                <SelectorList
                  data={coinOptions}
                  activeId={activeIndexes.coin}
                  onSelect={(id) => {
                    setActiveIndexes((prev) => ({ ...prev, coin: id }));
                    handleFormUpdate(
                      "coin",
                      coinOptions.find((c) => c.id === id)?.label
                    );
                  }}
                />
              </FormSection>
            </ScrollView>
          </MotiView>
        </Pressable>

        {/* Name Input */}
        <View
          // style={{
          //   backgroundColor: "white",
          //   paddingBottom: 10,
          //   paddingTop: -10,
          // }}
          style={[
            styles.modalContent,
            {
              marginBottom: -10,
              marginTop: -25,
              borderBottomRightRadius: 25,
              borderBottomLeftRadius: 25,
              padding: 10,
            },
          ]}
        >
          <FormSection title="Room Name">
            <TextInput
              style={[styles.input, {}]}
              value={formState.name}
              onChangeText={(val) => handleFormUpdate("roomName", val)}
              placeholder="Enter room name"
            />
          </FormSection>

          {/* Bet Amount Input */}
          <FormSection title="Bet Amount">
            <TextInput
              style={styles.input}
              value={formState.amount}
              onChangeText={async (val) => {
                await handleFormUpdate("bet", val);

                console.log(formState.bet);
              }}
              placeholder="Enter amount"
              keyboardType="numeric"
            />

            <Text style={styles.minimumBet}>
              Minimum bet amount starts from ₹10
            </Text>
          </FormSection>
        </View>
        {/* Publish Button */}
        <Pressable style={styles.publishButton} onPress={createMatches}>
          <Text style={styles.publishButtonText}>Publish Match</Text>
        </Pressable>
      </Modal>
    </View>
  );
};

// Helper Components
const FormSection = ({ title, children }) => (
  <View style={styles.formSection}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const ToggleGroup = ({ label, value, onChange }) => (
  <View style={styles.toggleGroup}>
    <Text style={styles.toggleLabel}>{label}:</Text>
    <View style={styles.toggleContainer}>
      <ToggleButton
        label="Yes"
        isActive={value}
        onPress={() => onChange(true)}
      />
      <ToggleButton
        label="No"
        isActive={!value}
        onPress={() => onChange(false)}
      />
    </View>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 48,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 16,
  },
  note: {
    color: "#FF4444",
    fontSize: 12,
    marginBottom: 16,
  },
  createButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C8E6C9",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  createButtonText: {
    marginLeft: 8,
    fontWeight: "600",
  },
  liveMatches: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEE",
    padding: 12,
    borderRadius: 8,
  },
  liveMatchesText: {
    marginLeft: 8,
    fontWeight: "600",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    maxHeight: "80%",
  },
  modalHandle: {
    width: 40,
    height: 4,
    backgroundColor: "#CCC",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 16,
  },
  modalScroll: {
    paddingBottom: 40,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  formSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  activeToggle: {
    backgroundColor: "#2196F3",
    borderColor: "#2196F3",
  },
  selectorList: {
    gap: 12,
  },
  selectorItem: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  activeSelector: {
    backgroundColor: "#2196F3",
    borderColor: "#2196F3",
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    shadowColor: "green",
    shadowOffset: { width: 0, height: 1 },

    padding: 12,
    fontSize: 16,
    borderRadius: 30,
  },
  minimumBet: {
    color: "#FF4444",
    fontSize: 12,
    marginTop: 8,
  },
  publishButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 24,
  },
  publishButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  modeToggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 24,
  },
  toggleGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  toggleContainer: {
    flexDirection: "row",
    gap: 12,
  },
  toggleLabel: {
    fontSize: 14,
  },
});

export default ClashSquad;
