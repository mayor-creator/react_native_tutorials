import { useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const Counter = () => {
	const [state, dispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case "INCREASE":
					return { ...state, count: state.count + 1 };
				case "DECREASE":
					if (state.count <= 0) return state;
					return { ...state, count: state.count - 1 };
				default:
					return state;
			}
		},
		{ count: 0 },
	);

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Simple Counter</Text>
			<Text style={styles.counterText}>Count: {state.count}</Text>
			<View style={styles.buttonRow}>
				<View style={styles.buttonWrapper}>
					<Button
						title="Increase"
						onPress={() => dispatch({ type: "INCREASE" })}
					/>
				</View>
				<View style={styles.buttonWrapper}>
					<Button
						title="Decrease"
						onPress={() => dispatch({ type: "DECREASE" })}
					/>
				</View>
			</View>

			<View style={styles.divider} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5ff",
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
});

// const [count, setCount] = useState(0);
// const handleDecreaseNumber = () => {
// 	if (count <= 0) return;
// 	setCount(count - 1);
// };
