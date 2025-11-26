import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface RadioButtonProps {
	tip: number | null;
	setTip: (tip: number | null) => void;
}

export default function RadioButton({ tip, setTip }: RadioButtonProps) {
	const tips = [5, 10, 15, 25, 50];

	// Check if the current tip is one of the presets
	const isCustomActive = tip !== null && !tips.includes(tip);
	const isRadioActive = tip !== null && tips.includes(tip);

	return (
		<>
			<View>
				<Text style={styles.heading}>Select Tip %</Text>
			</View>
			<View style={styles.radio}>
				{tips.map((presetTip) => (
					<Pressable
						key={presetTip}
						disabled={isCustomActive}
						style={[
							styles.radioLabel,
							tip === presetTip && styles.selectedRadioLabel,
							isCustomActive && styles.disabledInput,
						]}
						onPress={() => {
							setTip(presetTip);
						}}
					>
						<Text
							style={[
								styles.radioLabelText,
								tip === presetTip && styles.selectedRadioLabelText,
								isCustomActive && styles.disabledText,
							]}
						>
							{presetTip}%
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
					// If it's a preset, don't show it in custom input, or maybe show it?
					// The original logic cleared custom when preset was selected.
					// Here, if it's a preset, we can show empty or the value.
					// Let's show empty if it's a preset to avoid confusion, or only show if it's NOT a preset.
					value={isCustomActive && tip !== null ? String(tip) : ""}
					editable={!isRadioActive}
					onChangeText={(value) => {
						// convert string to number
						const num = value === "" ? null : Number(value);
						setTip(num);
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
