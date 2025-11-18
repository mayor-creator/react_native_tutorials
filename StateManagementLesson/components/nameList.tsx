import { useState } from "react";
import {
	Button,
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";

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
