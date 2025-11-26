import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View>
				<Text style={styles.heading}>SPLI TTER</Text>
			</View>

			<View style={styles.innerContainer}>
				<View>
					<Text>Bill</Text>
					<TextInput></TextInput>
				</View>
				<View>
					<Text>Select Tip %</Text>
				</View>
				<View>
					<Text>Number of People</Text>
				</View>
				<View style={styles.totalContainer}></View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#C5E4E7",
	},
	heading: {
		textAlign: "center",
		fontWeight: "bold",
		marginTop: 80,
		fontSize: 30,
		color: "#3D6666",
	},
	innerContainer: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		marginTop: 100,
		padding: 24,
		gap: 20,
	},
	totalContainer: {
		backgroundColor: "#00474B",
		height: 257,
		borderRadius: 15,
	},
});
