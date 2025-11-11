import { StatusBar } from "expo-status-bar";
import { useReducer, useState } from "react";
import {
	Button,
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";

export default function App() {
	const [count, setCount] = useState(0);

	const handleDecreaseNumber = () => {
		if (count <= 0) return;
		setCount(count - 1);
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.header}>Simple Counter</Text>
			<Text style={styles.counterText}>Count: {count}</Text>
			<View style={styles.buttonRow}>
				<View style={styles.buttonWrapper}>
					<Button title="Increase" onPress={() => setCount(count + 1)} />
				</View>
				<View style={styles.buttonWrapper}>
					<Button title="Decrease" onPress={handleDecreaseNumber} />
				</View>
			</View>

			<View style={styles.divider} />

			<NameList></NameList>
		</View>
	);
}

export const NameList = () => {
	const [list, setList] = useState([""]);
	const [name, setName] = useState("");

	const handleAddName = () => {
		if (name.trim().length === 0) {
			return;
		}
		setList([...list, name]);
		setName("");
	};

	return (
		<View style={styles.nameListContainer}>
			<FlatList
				data={list}
				keyExtractor={(item, index) => item + index}
				renderItem={({ item }) => <Text style={styles.nameText}>{item}</Text>}
			/>

			<TextInput
				style={styles.input}
				value={name}
				onChangeText={setName}
				placeholder="Enter a name"
				placeholderTextColor="#888"
			/>
			<Button title="Add Name" onPress={handleAddName}></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},

	header: {
		color: "#333",
		fontSize: 22,
		fontWeight: "600",
		marginBottom: 10,
	},

	counterText: {
		color: "#007aff",
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 15,
	},

	buttonRow: {
		flexDirection: "row",
		gap: 10,
	},

	buttonWrapper: {
		width: 120,
	},

	divider: {
		height: 1,
		backgroundColor: "#f4d0d0ff",
		marginVertical: 25,
		width: "80%",
	},

	nameListContainer: {
		width: "100%",
		alignItems: "center",
	},

	nameText: {
		color: "#333",
		fontSize: 18,
		marginVertical: 4,
	},

	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		padding: 10,
		marginTop: 10,
		marginBottom: 10,
		width: "80%",
		backgroundColor: "#fff",
	},

	addButton: {
		width: 150,
	},
});
