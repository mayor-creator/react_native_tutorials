import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";
import { Button } from "@/src/components/Button";

const handleOpenAlert = () => {
	Alert.alert("Hello");
};

export default function Index() {
	const [isModal, setIsModal] = useState(Boolean);

	return (
		<View style={styles.container}>
			<Text>Expo Tab Lesson</Text>
			<Button
				title="Open Alert"
				bgColor="#527f50"
				onPress={handleOpenAlert}
			></Button>

			<Button
				title="Open Modal"
				bgColor="#527f50"
				onPress={() => setIsModal(true)}
			></Button>

			{/*create a custom modal */}
			<Modal
				visible={isModal}
				onRequestClose={() => setIsModal(false)}
				transparent
				//presentationStyle="pageSheet"
				animationType="slide"
			>
				<View style={styles.modalContainer}>
					<View style={styles.modalChildContainer}>
						<Text style={styles.modalText}>A custom styled modal!</Text>
						<Button
							title="Close"
							bgColor="#252f50"
							onPress={() => {
								setIsModal(false);
							}}
						></Button>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#e51c5fff",
		gap: 10,
	},
	modalContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	modalChildContainer: {
		padding: 12,
		borderRadius: 14,
		backgroundColor: "#ed872d",
	},
	modalText: {
		fontSize: 18,
	},
});
