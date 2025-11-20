import { Link, useLocalSearchParams } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function SecondScreen() {
	const params = useLocalSearchParams<{ name?: string }>();
	return (
		<View style={styles.container}>
			<Text>Second Screen</Text>
			{params.name ? <Text>Hello {params.name}</Text> : <Text>No Name</Text>}
			<Link href="../third" push asChild>
				<Button title="push to /third"></Button>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "green",
		justifyContent: "center",
		alignItems: "center",
	},
});
