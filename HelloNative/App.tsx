import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text>Hello World</Text>

			<View style={{ padding: 10 }}>
				<Text style={styles.baseText}>
					Good morning, <Text style={styles.innerText}>how're you doing?</Text>
				</Text>
			</View>

			<View>
				<Image
					style={styles.image}
					source={{ uri: "https://picsum.photos/seed/696/600/400" }}
					contentFit="cover"
					transition={1000}
					accessibilityLabel="mountain in the cloud"
				/>
			</View>

			<View style={styles.buttonContainer}>
				<Pressable
					style={({ pressed }) => [
						styles.button,
						pressed && styles.buttonPressed,
					]}
					onPress={() => alert("Button pressed")}
				>
					<Text style={styles.buttonText}>Press Me</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	baseText: {
		fontWeight: "bold",
	},
	innerText: {
		color: "green",
	},
	image: {
		width: 300,
		height: 200,
		marginTop: 20,
		borderRadius: 20,
	},
	buttonContainer: {
		width: 320,
		height: 68,
		alignItems: "center",
		justifyContent: "center",
		padding: 3,
	},
	button: {
		backgroundColor: "#007aff",
		borderRadius: 20,
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	buttonPressed: {
		backgroundColor: "#bc590eff",
		transform: [{ scale: 0.98 }],
	},
});
