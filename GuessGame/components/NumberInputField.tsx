import { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "./Button";
import { OpponentGuessNumber } from "./OpponentGuess";

export const NumberInputField = () => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleConfirmNumber = () => {
    const number = Number(enteredNumber);
    if (number <= 0 || number > 99) {
      alert("Enter a number between 1 and 99");
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
        style={styles.numberTextInput}
        value={enteredNumber}
        onChangeText={setEnteredNumber}
      />
      <View style={styles.mainButtonContainer}>
        <Button label="Reset" onPress={() => setEnteredNumber("")} />
        <Button label="Confirm" onPress={handleConfirmNumber} />
      </View>
      <Modal visible={modalVisible}>
        <OpponentGuessNumber humanPlayerNumber={Number(enteredNumber)} />
      </Modal>
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
    color: "#FFFFFF",
    fontFamily: "Outfit_400Regular",
    fontSize: 20,
  },
  numberTextInput: {
    borderBottomWidth: 3,
    borderColor: "#FFFFFF",
    color: "#FFFFFF",
    width: 50,
    fontSize: 18,
    fontFamily: "Outfit_400Regular",
  },
  mainButtonContainer: {
    flexDirection: "row",
  },
});
