import { useFonts } from "expo-font";
import { Image } from "expo-image";
import { useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "./data/data.json";

export default function App() {
	const [fontLoaded] = useFonts({
		"Mantrope-ExtraBold": require("./assets/fonts/Manrope-ExtraBold.ttf"),
	});

	const [randomItem, setRandomItem] = useState(() => {
		const randomIndex = Math.floor(Math.random() * data.length);
		return data[randomIndex];
	});

	const handleNewQuote = () => {
		const randomIndex = Math.floor(Math.random() * data.length);
		setRandomItem(data[randomIndex]);
	};

	const scaleAnim = useRef(new Animated.Value(1)).current;

	const handlePressIn = () => {
		Animated.spring(scaleAnim, {
			toValue: 0.95,
			useNativeDriver: true,
		}).start();
	};

	const handlePressOut = () => {
		Animated.spring(scaleAnim, {
			toValue: 1,
			friction: 3,
			useNativeDriver: true,
		}).start();
	};

	if (!fontLoaded) {
		return null;
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.cardContainer}>
				<Text style={styles.numberText}>Advice # {randomItem.id}</Text>
				<Text style={styles.quoteText}>"{randomItem.quote}"</Text>
				<Text style={styles.numberText}>"-{randomItem.author}"</Text>
				<View>
					<Image
						source={require("./assets/images/pattern-divider-mobile.svg")}
						contentFit="cover"
						style={styles.image}
					/>
				</View>

				<Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
					<Pressable
						style={({ pressed }) => [
							styles.button,
							{ backgroundColor: pressed ? "#a5da1eff" : "#53FFAA" },
						]}
						onPress={handleNewQuote}
						onPressIn={handlePressIn}
						onPressOut={handlePressOut}
					>
						<Image
							source={require("./assets/images/icon-dice.svg")}
							contentFit="cover"
							style={styles.buttonImage}
						></Image>
					</Pressable>
				</Animated.View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#202733",
		alignItems: "center",
		justifyContent: "center",
	},
	cardContainer: {
		backgroundColor: "#313A48",
		borderRadius: 10,
		padding: 20,
		alignItems: "center",
		width: "85%",
	},
	numberText: {
		fontFamily: "Mantrope-ExtraBold",
		fontSize: 11,
		textAlign: "center",
		color: "#53FFAA",
		marginBottom: 24,
		letterSpacing: 2,
	},
	quoteText: {
		fontFamily: "Mantrope-ExtraBold",
		fontSize: 24,
		lineHeight: 28,
		textAlign: "center",
		color: "#CEE3E9",
		marginBottom: 24,
	},
	image: {
		width: 296,
		height: 16,
		marginBottom: 24,
	},
	button: {
		backgroundColor: "#53FFAA",
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	buttonImage: {
		width: 24,
		height: 24,
	},
});
