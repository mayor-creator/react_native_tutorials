import {
  IndieFlower_400Regular,
  useFonts,
} from "@expo-google-fonts/indie-flower";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "./components/Button";

type Goal = {
  id: string;
  text: string;
};

export default function App() {
  const [goalText, setGoalText] = useState<string>("");
  const [courseGoal, setCourseGoal] = useState<Goal[]>([]);

  const [font_loaded] = useFonts({ IndieFlower_400Regular });

  if (!font_loaded) {
    return null;
  }

  const addGoalHandler = () => {
    if (!goalText.trim()) return;

    setCourseGoal((previousCourseGoal) => [
      ...previousCourseGoal,
      {
        id: Math.random().toString(),
        text: goalText,
      },
    ]);

    setGoalText("");
  };

  const renderGoalItem = ({ item }: { item: Goal }) => (
    <View style={styles.goalListContainer}>
      <Text style={styles.goalText}>{item.text}</Text>
    </View>
  );

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={goalText}
            placeholder="Your course goal"
            placeholderTextColor="lightgrey"
            onChangeText={setGoalText}
          ></TextInput>
          <Button label="Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.goalContainer}>
          <Text style={styles.goalTitleText}>List of goals...</Text>
          <FlatList
            data={courseGoal}
            keyExtractor={(item) => item.id}
            renderItem={renderGoalItem}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#4E56C0",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "lightgrey",
    color: "white",
    width: "70%",
    marginRight: 8,
    padding: 10,
    fontFamily: "IndieFlower",
  },
  goalContainer: {
    flex: 5,
  },
  goalTitleText: {
    fontFamily: "IndieFlower",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  goalListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#D78FEE",
    padding: 10,
    margin: 10,
  },
  goalText: {
    fontFamily: "IndieFlower",
    fontSize: 16,
    color: "white",
  },
});
