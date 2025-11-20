import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function SecondScreen() {
	return (
		<View style={styles.container}>
			<Text>second</Text>
			<Link href="/second/nested" push asChild>
				<Button title="link to nested screen"></Button>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "green",
	},
});

/**
 * /index
 * /second(stack)
 * 	/second/index
 * 	/second/nested
 * 	/second/alsoNested
 * third
 * fourth
 */
