import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function NestedSecondScreen() {
	return (
		<View style={styles.container}>
			<Text>nested second screen</Text>
			<Link href="/second/alsoNested" push asChild>
				<Button title="link to also nested screen"></Button>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#915c83",
	},
});
