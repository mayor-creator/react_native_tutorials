import { useFonts } from "expo-font";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
	const [fontLoaded] = useFonts({
		"Mantrope-ExtraBold": require("./assets/fonts/Manrope-ExtraBold.ttf"),
	});

	if (!fontLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<View style={styles.cardContainer}>
				<Text style={styles.numberText}>Advice # 1</Text>
				<Text style={styles.quoteText}>
					"It is easy to sit up and take notice, what's difficult is getting and
					taking action."
				</Text>
				<View>
					<Image
						source={require("./assets/images/pattern-divider-mobile.svg")}
						contentFit="cover"
						style={styles.image}
					/>
				</View>

				<Pressable style={styles.button}>
					<Image
						source={require("./assets/images/icon-dice.svg")}
						contentFit="cover"
						style={styles.buttonImage}
					></Image>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#202733",
		alignItems: "center",
		justifyContent: "center",
		padding: 24,
	},
	cardContainer: {
		backgroundColor: "#313A48",
		borderRadius: 10,
		padding: 24,
		alignItems: "center",
	},
	numberText: {
		fontFamily: "Mantrope-ExtraBold",
		fontSize: 11,
		textAlign: "center",
		color: "#53FFAA",
		marginBottom: 24,
	},
	quoteText: {
		fontFamily: "Mantrope-ExtraBold",
		fontSize: 24,
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
		height: 64,
		width: 64,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonImage: {
		width: 24,
		height: 24,
	},
});
