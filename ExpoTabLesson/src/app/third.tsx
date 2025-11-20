import { StyleSheet, Text, View } from "react-native";

export default function ThirdScreen() {
	return (
		<View style={styles.container}>
			<Text>Third</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "violet",
	},
});
