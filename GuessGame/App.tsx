import {
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  useFonts,
} from "@expo-google-fonts/outfit";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NumberInputField } from "./components/NumberInputField";
import { Colors } from "./theme/colors";

export default function App() {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      colors={[Colors.midnightNavy, Colors.sageGreen]}
      style={styles.container}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.gameTitleContainer}>
          <Text style={styles.gameTitle}>Guess My Number</Text>
        </View>
        <NumberInputField />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  gameTitleContainer: {
    marginTop: 100,
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 20,
  },
  gameTitle: {
    color: Colors.white,
    fontFamily: "Outfit_600SemiBold",
    fontSize: 24,
  },
});
