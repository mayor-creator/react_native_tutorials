import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

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
});
