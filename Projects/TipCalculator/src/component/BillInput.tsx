import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface BillInputProps {
	bill: number | null;
	setBill: (bill: number | null) => void;
}

export default function BillInput({ bill, setBill }: BillInputProps) {
	const [error, setError] = useState(false);

	const handleChange = (value: string) => {
		// Allow empty input
		if (value === "") {
			setBill(null);
			setError(false);
			return;
		}

		// Only allow numbers and a single decimal point
		const valid = /^(\d+(\.\d{0,2})?)?$/.test(value);
		if (!valid) return;

		const num = Number(value);
		setBill(num);

		// Validation: can't be zero or negative
		if (num <= 0) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<View style={styles.billContainer}>
			<Text style={styles.heading}>Bill</Text>

			{/* Hidden label for accessibility */}
			<Text style={styles.hiddenLabel}>bill</Text>

			{error && <Text style={styles.errorMessage}>Can't be zero</Text>}

			<TextInput
				style={[styles.input, error && styles.inputError]}
				placeholder="0.00"
				keyboardType="decimal-pad"
				value={bill !== null ? String(bill) : ""}
				onChangeText={handleChange}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	billContainer: {
		marginBottom: 20,
	},
	heading: {
		fontSize: 18,
		fontWeight: "700",
		color: "#567a7d",
		marginBottom: 10,
	},
	hiddenLabel: {
		height: 0,
		width: 0,
		opacity: 0,
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
