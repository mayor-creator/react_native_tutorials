import {
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  useFonts,
} from "@expo-google-fonts/outfit";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NumberInputField } from "./components/NumberInputField";

export default function App() {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.gameTitleContainer}>
        <Text style={styles.gameTitle}>Guess My Number</Text>
      </View>
      <NumberInputField />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D3C59",
    alignItems: "center",
    padding: 24,
  },
  gameTitleContainer: {
    marginTop: 100,
    borderWidth: 2,
    borderColor: "#FFFF",
    padding: 20,
  },
  gameTitle: {
    color: "#FFFF",
    fontFamily: "Outfit_600SemiBold",
    fontSize: 24,
  },
});
