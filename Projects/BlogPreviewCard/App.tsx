import { useFonts } from "expo-font";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
	const [fontLoaded] = useFonts({
		"Figtree-ExtraBold": require("./assets/fonts/static/Figtree-ExtraBold.ttf"),
		"Figtree-Medium": require("./assets/fonts/static/Figtree-Medium.ttf"),
	});

	if (!fontLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.frameContainer}>
				<Image
					source={require("./assets/images/illustration-article.svg")}
					style={styles.image}
				/>
				<View style={styles.contentContainer}>
					<Pressable style={styles.button}>
						<Text style={styles.buttonText}>Learning</Text>
					</Pressable>
					<Text style={styles.dateText}>Published 21 Dec 2023</Text>
					<Text style={styles.titleText}>HTML & CSS Foundations</Text>
					<Text>
						These languages are the backbone od every website, defining
						structure, content, and presentation.
					</Text>
				</View>
				<View style={styles.authorContainer}>
					<Image
						source={require("./assets/images/image-avatar.webp")}
						style={styles.authorImage}
					/>
					<Text style={styles.authorText}>Greg Hooper</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "yellow",
		alignItems: "center",
		justifyContent: "center",
	},
	frameContainer: {
		backgroundColor: "#ffffff",
		height: 501,
		width: 327,
		borderRadius: 20,
		padding: 24,
		borderWidth: 1,
		borderColor: "#000000",

		//shadow
		shadowColor: "#000000",
		shadowOffset: { width: 8, height: 8 },
		shadowOpacity: 1,
		shadowRadius: 0,
		elevation: 8,
	},
	image: {
		width: 279,
		height: 200,
		borderRadius: 20,
		marginBottom: 20,
	},
	contentContainer: {
		gap: 12,
		marginBottom: 24,
	},
	button: {
		borderRadius: 8,
		backgroundColor: "yellow",
		paddingHorizontal: 12,
		paddingVertical: 4,
		height: 26,
		width: 100,
	},
	buttonText: {
		fontFamily: "Figtree-ExtraBold",
		fontSize: 12,
		fontWeight: "bold",
		textAlign: "center",
	},
	dateText: {
		fontFamily: "Figtree-Medium",
		fontSize: 12,
		fontWeight: 500,
	},
	titleText: {
		fontFamily: "Figtree-ExtraBold",
		fontSize: 20,
		fontWeight: "bold",
	},
	authorContainer: {
		width: 129,
		gap: 12,
		flexDirection: "row",
	},
	authorImage: {
		height: 32,
		width: 32,
	},
	authorText: {
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
		fontFamily: "Figtree-ExtraBold",
	},
});
