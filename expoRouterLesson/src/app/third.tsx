import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ThirdScreen() {
	return (
		<View style={styles.container}>
			<Text>Third Screen Home</Text>
			<Link href="/" push asChild>
				<Button title="push to /index"></Button>
			</Link>
			<Link href="/" dismissTo asChild>
				<Button title="Dismiss to /"></Button>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "purple",
	},
});
