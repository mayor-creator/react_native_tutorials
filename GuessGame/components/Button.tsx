import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
};

export const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressedButton,
        ]}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "50%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#D1855C",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: " Outfit_400Regular",
  },
  pressedButton: {
    backgroundColor: "#E5BA41",
  },
});
