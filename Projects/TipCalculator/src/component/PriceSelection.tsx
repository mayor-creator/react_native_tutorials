import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PriceProps {
	tipAmount: number; // per person
	totalAmount: number; // per person
	onReset: () => void;
}

export default function PriceSection({
	tipAmount,
	totalAmount,
	onReset,
}: PriceProps) {
	return (
		<View style={styles.container}>
			{/* Tip Amount */}
			<View style={styles.amountContainer}>
				<View style={styles.labelGroup}>
					<Text style={styles.labelText}>
						Tip Amount
						<Text style={styles.perPerson}> / person</Text>
					</Text>
					<Text style={styles.amountText}>${tipAmount.toFixed(2)}</Text>
				</View>

				{/* Total */}
				<View style={styles.labelGroup}>
					<Text style={styles.labelText}>
						Total
						<Text style={styles.perPerson}> / person</Text>
					</Text>
					<Text style={styles.amountText}>${totalAmount.toFixed(2)}</Text>
				</View>
			</View>

			{/* Reset Button */}
			<View style={styles.resetContainer}>
				<TouchableOpacity style={styles.resetButton} onPress={onReset}>
					<Text style={styles.resetButtonText}>RESET</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		width: "100%",
	},
	amountContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		gap: 1,
		paddingBottom: 20,
	},
	labelGroup: {
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	labelText: {
		color: "#5e7a7d",
		fontSize: 16,
		fontWeight: "500",
	},
	perPerson: {
		fontSize: 12,
		color: "#7f9c9f",
	},
	amountText: {
		color: "#26c0ab",
		fontSize: 28,
		fontWeight: "700",
		marginTop: 5,
	},
	resetContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 40,
		gap: 24,
	},
	resetButton: {
		width: "100%",
		height: 38,
		borderRadius: 8,
		backgroundColor: "#26c0ab",
		justifyContent: "center",
		alignItems: "center",
	},
	resetButtonText: {
		color: "#00494d",
		fontSize: 20,
		fontWeight: "700",
		textTransform: "uppercase",
	},
});
