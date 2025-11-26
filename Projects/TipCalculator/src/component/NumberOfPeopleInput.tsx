import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function NumberOfPeopleInput() {
	const [people, setPeople] = useState<number | null>(null);
	const [error, setError] = useState(false);

	const handleChange = (value: string) => {
		if (value === "") {
			setPeople(null);
			setError(false);
			return;
		}

		// Only allow integers
		const valid = /^\d*$/.test(value);
		if (!valid) return;

		const num = Number(value);
		setPeople(num);

		// Validation: can't be zero
		if (num <= 0) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<View style={styles.peopleContainer}>
			<Text style={styles.heading}>Number of People</Text>

			{error && <Text style={styles.errorMessage}>Can't be zero</Text>}

			<TextInput
				style={[styles.input, error && styles.inputError]}
				placeholder="0"
				keyboardType="numeric"
				value={people !== null ? String(people) : ""}
				onChangeText={handleChange}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	peopleContainer: {
		marginBottom: 20,
	},
	heading: {
		fontSize: 18,
		fontWeight: "700",
		color: "#567a7d",
		marginBottom: 10,
	},
	errorMessage: {
		color: "#e17055",
		fontSize: 12,
		marginBottom: 5,
	},
	input: {
		width: "100%",
		textAlign: "right",
		borderRadius: 8,
		backgroundColor: "hsl(189, 41%, 97%)",
		padding: 10,
		fontSize: 18,
		fontWeight: "700",
		color: "#00494d",
		borderWidth: 0,
	},
	inputError: {
		borderWidth: 1,
		borderColor: "#e17055",
	},
});
