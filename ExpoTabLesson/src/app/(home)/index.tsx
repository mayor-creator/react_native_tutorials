import { Alert, StyleSheet, Text, View } from "react-native";
import { Button } from "@/src/components/Button";

const handleOpenAlert = () => {
	Alert.alert("Hello");
};

export default function Index() {
	return (
		<View style={styles.container}>
			<Text>Expo Tab Lesson</Text>
			<Button
				title="alert"
				bgColor="#527f50"
				onPress={handleOpenAlert}
			></Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#e51c5fff",
	},
});
