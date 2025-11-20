import {
	ActivityIndicator,
	Platform,
	Pressable,
	StyleSheet,
	Text,
	type TextStyle,
	type ViewStyle,
} from "react-native";

interface ButtonProps {
	title: string;
	onPress: () => void;
	loading?: boolean;
	disable?: boolean;
	style?: ViewStyle;
	textStyle?: TextStyle;
	bgColor: string;
}

export const Button = ({
	title,
	onPress,
	loading = false,
	disable = false,
	style,
	textStyle,
	bgColor,
}: ButtonProps) => {
	const isDisabled = loading || disable;

	return (
		<Pressable
			onPress={onPress}
			disabled={isDisabled}
			android_ripple={{
				color: "#ffffff30",
				borderless: false,
				radius: 200,
			}}
			style={({ pressed }) => [
				styles.button,
				{
					backgroundColor: isDisabled ? "#9CA3AF" : bgColor,
					opacity: pressed && Platform.OS === "ios" ? 0.7 : 1,
				},
				style,
			]}
		>
			{loading ? (
				<ActivityIndicator color="#fff" />
			) : (
				<Text style={[styles.text, textStyle]}>{title}</Text>
			)}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		paddingVertical: 14,
		paddingHorizontal: 18,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
	},
	text: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "600",
	},
});
