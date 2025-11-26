import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface BillInputProps {
	bill: number | null;
	setBill: (bill: number | null) => void;
}

export default function BillInput({ bill, setBill }: BillInputProps) {
	const [error, setError] = useState(false);
	const [localValue, setLocalValue] = useState(
		bill !== null ? String(bill) : "",
	);

	useEffect(() => {
		if (bill === null) {
			setLocalValue("");
		} else {
			const parsedLocal = parseFloat(localValue);
			// Only update local value if it doesn't match the prop (to avoid cursor jumps/formatting loss)
			if (Number.isNaN(parsedLocal) || parsedLocal !== bill) {
				setLocalValue(String(bill));
			}
		}
	}, [bill, localValue]);

	const handleChange = (value: string) => {
		setLocalValue(value);

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

			<View style={[styles.inputContainer, error && styles.inputError]}>
				<Text style={styles.currency}>$</Text>
				<TextInput
					style={styles.input}
					placeholder="0.00"
					keyboardType="decimal-pad"
					value={localValue}
					onChangeText={handleChange}
				/>
			</View>
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
		textAlign: "right",
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "hsl(189, 41%, 97%)",
		borderRadius: 8,
		paddingHorizontal: 15,
		borderWidth: 2,
		borderColor: "transparent",
	},
	inputError: {
		borderColor: "#e17055",
	},
	currency: {
		fontSize: 18,
		fontWeight: "700",
		color: "#9EBBBD",
	},
	input: {
		flex: 1,
		textAlign: "right",
		fontSize: 24,
		fontWeight: "700",
		color: "#00494d",
		paddingVertical: 10,
		borderWidth: 0,
	},
});
