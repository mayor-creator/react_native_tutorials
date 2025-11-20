import { StyleSheet, Text, View } from "react-native";

export default function AlsoNestedSecondScreen() {
	return (
		<View style={styles.container}>
			<Text>also nested second screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#5c8391",
	},
});
