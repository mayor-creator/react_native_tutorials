import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../theme/colors";
import { Button } from "./Button";
import { OpponentGuessNumber } from "./OpponentGuess";

export const NumberInputField = () => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleConfirmNumber = () => {
    const number = Number(enteredNumber);
    if (number <= 0 || number > 99) {
      Alert.alert("Invalid Number!", "Enter a number between 1 and 99", [
        { text: "Okay", onPress: () => setEnteredNumber("") },
      ]);
    } else {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.gameInputContainer}>
      <Text style={styles.gameText}>Enter a Number</Text>
      <TextInput
        keyboardType="numeric"
        textAlign="center"
        maxLength={2}
        style={styles.numberTextInput}
        value={enteredNumber}
        onChangeText={setEnteredNumber}
      />
      <View style={styles.buttonContainer}>
        <Button label="Reset" onPress={() => setEnteredNumber("")} />
        <Button label="Confirm" onPress={handleConfirmNumber} />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <OpponentGuessNumber humanPlayerNumber={Number(enteredNumber)} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  gameInputContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: Colors.sageGreen,
    borderRadius: 10,
    padding: 20,
    marginTop: 50,
    gap: 10,
  },
  gameText: {
    color: Colors.white,
    fontFamily: "Outfit_400Regular",
    fontSize: 20,
  },
  numberTextInput: {
    borderBottomWidth: 3,
    borderColor: Colors.white,
    color: Colors.white,
    width: 50,
    fontSize: 32,
    fontFamily: "Outfit_400Regular",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
