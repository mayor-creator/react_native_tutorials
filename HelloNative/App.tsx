import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text>Hello World</Text>
			<View>
				<Text style={styles.baseText}>
					Good morning, <Text style={styles.innerText}>how're you doing?</Text>
				</Text>
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
});
