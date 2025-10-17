import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsla(213, 11%, 16%, 1.00)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "rgba(255, 255, 255, 1)",
  },
});
