import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [loaded, error] = useFonts({
		"Lato-Black": require("./assets/font/Lato/Lato-Black.ttf"),
		"Lato-Regular": require("./assets/font/Lato/Lato-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	});

	if (!loaded && !error) return null;

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.title}>React Native</Text>
			<View style={styles.innerContainer}>
				<View style={styles.innerChild}>
					<Text style={styles.text}>Hello</Text>
				</View>
				<View style={styles.innerChild}></View>
				<View style={styles.innerChild}></View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: "#f5d04e",
	},
	title: {
		marginTop: 40,
		paddingVertical: 8,
		borderWidth: 4,
		borderColor: "#20232A",
		borderRadius: 6,
		backgroundColor: "#61dafb",
		color: "#20232a",
		textAlign: "center",
		fontSize: 30,
		fontWeight: "bold",
		fontFamily: "Lato-Regular",
	},
	innerContainer: {
		backgroundColor: "black",
		height: 200,
		marginTop: 10,
		flexDirection: "row",
		gap: 10,
		justifyContent: "space-around",
		alignItems: "center",
	},
	innerChild: {
		backgroundColor: "green",
		height: 100,
		width: 100,
		padding: 12,
	},
	text: {
		fontFamily: "Lato-Black",
		fontSize: 20,
		textAlign: "center",
		color: "white",
	},
});
