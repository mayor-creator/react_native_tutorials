import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BillInput from "./src/component/BillInput";
import NumberOfPeopleInput from "./src/component/NumberOfPeopleInput";
import PriceSection from "./src/component/PriceSelection";
import RadioButton from "./src/component/RadioButton";

export default function App() {
	const [bill, setBill] = useState<number | null>(null);
	const [tip, setTip] = useState<number | null>(null);
	const [people, setPeople] = useState<number | null>(null);

	// Calculate whenever dependencies change
	// Or we can calculate on render if it's fast enough (it is)
	// Let's use derived state for simplicity
	let calculatedTipAmount = 0;
	let calculatedTotalAmount = 0;

	if (bill && tip !== null && people && people > 0) {
		const tipValue = bill * (tip / 100);
		const totalValue = bill + tipValue;

		calculatedTipAmount = tipValue / people;
		calculatedTotalAmount = totalValue / people;
	}

	const handleReset = () => {
		setBill(null);
		setTip(null);
		setPeople(null);
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View>
				<Text style={styles.heading}>SPLI TTER</Text>
			</View>

			<View style={styles.innerContainer}>
				<View>
					<BillInput bill={bill} setBill={setBill} />
				</View>
				<View>
					<RadioButton tip={tip} setTip={setTip} />
				</View>
				<View>
					<NumberOfPeopleInput people={people} setPeople={setPeople} />
				</View>
				<View style={styles.totalContainer}>
					<PriceSection
						tipAmount={calculatedTipAmount}
						totalAmount={calculatedTotalAmount}
						onReset={handleReset}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#C5E4E7",
	},
	heading: {
		textAlign: "center",
		fontWeight: "bold",
		marginTop: 80,
		fontSize: 30,
		color: "#3D6666",
	},
	innerContainer: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		marginTop: 100,
		padding: 24,
		gap: 20,
	},
	totalContainer: {
		backgroundColor: "#00474B",
		height: 257,
		borderRadius: 15,
		padding: 20,
	},
	button: {
		height: 48,
		width: 281,
		color: "#00474B",
	},
	buttonText: {
		color: "white",
	},
});
