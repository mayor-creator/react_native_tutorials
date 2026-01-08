import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "./Button";

export const NumberInputField = () => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const handleConfirmNumber = () => {
    const number = Number(enteredNumber);
    if (number <= 0) {
      console.log("enter a number please");
    }
  };

  return (
    <View style={styles.gameInputContainer}>
      <Text style={styles.gameText}>Enter a Number</Text>
      <TextInput
        keyboardType="numeric"
        textAlign="center"
        style={styles.numberTextInput}
        value={enteredNumber}
        onChangeText={setEnteredNumber}
      />
      <View style={styles.mainButtonContainer}>
        <Button label="Reset" onPress={() => setEnteredNumber("")} />
        <Button label="Confirm" onPress={handleConfirmNumber} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameInputContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#94A378",
    borderRadius: 10,
    padding: 20,
    marginTop: 50,
    gap: 10,
  },
  gameText: {
    color: "#FFFF",
    fontFamily: "Outfit_400Regular",
    fontSize: 20,
  },
  numberTextInput: {
    borderBottomWidth: 3,
    borderColor: "#FFFF",
    color: "#FFFF",
    width: 50,
    fontSize: 18,
    fontFamily: "Outfit_400Regular",
  },
  mainButtonContainer: {
    flexDirection: "row",
  },
});
