import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function RadioButton() {
	const [selectedTip, setSelectedTip] = useState<number | null>(null);
	const [customTip, setCustomTip] = useState<number | null>(null);

	const tips = [5, 10, 15, 25, 50];

	const isCustomActive = customTip !== null;
	const isRadioActive = selectedTip !== null;

	return (
		<>
			<View>
				<Text style={styles.heading}>Select Tip %</Text>
			</View>
			<View style={styles.radio}>
				{tips.map((tip) => (
					<Pressable
						key={tip}
						disabled={isCustomActive}
						style={[
							styles.radioLabel,
							selectedTip === tip && styles.selectedRadioLabel,
							isCustomActive && styles.disabledInput,
						]}
						onPress={() => {
							setSelectedTip(tip);
							setCustomTip(null);
						}}
					>
						<Text
							style={[
								styles.radioLabelText,
								selectedTip === tip && styles.selectedRadioLabelText,
								isCustomActive && styles.disabledText,
							]}
						>
							{tip}%
						</Text>
					</Pressable>
				))}

				{/* Custom Input Tip */}
				<TextInput
					style={[styles.customInput, isRadioActive && styles.disabledInput]}
					placeholder="Custom"
					placeholderTextColor="#7f9c9f"
					keyboardType="numeric"
					// convert number to string
					value={customTip !== null ? String(customTip) : ""}
					editable={!isRadioActive}
					onChangeText={(value) => {
						// convert string to number
						const num = value === "" ? null : Number(value);
						setCustomTip(num);
						if (num !== null) setSelectedTip(null);
					}}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	heading: {
		fontSize: 18,
		fontWeight: "700",
		color: "#567a7d",
		marginBottom: 10,
	},

	radio: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		flexWrap: "wrap",
		width: "100%",
	},

	radioLabel: {
		backgroundColor: "hsl(183, 100%, 15%)",
		borderRadius: 8,
		width: 117,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
	},

	radioLabelText: {
		color: "hsl(0, 0%, 100%",
		fontSize: 18,
		fontWeight: "700",
	},

	// active and selected state
	selectedRadioLabel: {
		backgroundColor: "hsl(172, 67%, 45%)",
	},
	selectedRadioLabelText: {
		color: "hsl(183, 100%, 15%)",
	},

	customInput: {
		width: 117,
		padding: 10,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#d6e4e5",
		fontSize: 18,
		fontWeight: "700",
		color: "hsl(183, 100%, 15%)",
		backgroundColor: "#f3f9fa",
		textAlign: "center",
	},

	// disabled state
	disabledInput: {
		opacity: 0.5,
	},
	disabledText: {
		opacity: 0.5,
	},
});
