import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const Advice = () => {
	const [advice, setAdvice] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchAdvice = async () => {
			try {
				const response = await fetch("https://api.adviceslip.com/advice");
				const data = await response.json();
				setAdvice(data.slip.advice);
			} catch (error) {
				console.error("Error fetching advice:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchAdvice();
	}, []);

	if (loading) {
		return <ActivityIndicator size="large" color="#0000ff" />;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>💡 Advice</Text>
			<Text style={styles.advice}>{advice}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 10,
	},
	advice: {
		fontSize: 18,
		fontStyle: "italic",
		textAlign: "center",
	},
});
