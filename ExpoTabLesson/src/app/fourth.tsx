import { StyleSheet, Text, View } from "react-native";

export default function FourthScreen() {
	return (
		<View style={styles.container}>
			<Text>Fourth</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ff7faa",
	},
});
