import { useState } from "react";
import {
	Button,
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";

export default function App() {
	const [goalText, setGoalText] = useState<string>("");
	const [courseGoal, setCourseGoal] = useState<string[]>([]);

	const addGoalHandler = () => {
		setCourseGoal((previousCourseGoal) => [...previousCourseGoal, goalText]);
		setGoalText("");
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					value={goalText}
					placeholder="Your course goal"
					onChangeText={setGoalText}
				></TextInput>
				<Button title="Add Goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalContainer}>
				<Text style={styles.goalTitleText}>List of goals...</Text>
				<View>
					<FlatList
						data={courseGoal}
						keyExtractor={(item) => item}
						renderItem={({ item }) => (
							<View style={styles.goalListContainer}>
								<Text style={styles.goalText}>{item}</Text>
							</View>
						)}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		padding: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "lightgrey",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "lightgrey",
		width: "70%",
		marginRight: 8,
		padding: 10,
	},
	goalContainer: {
		flex: 5,
	},
	goalTitleText: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 20,
	},
	goalListContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 10,
		backgroundColor: "purple",
		padding: 10,
		margin: 10,
	},
	goalText: {
		fontSize: 16,
		color: "white",
	},
});
