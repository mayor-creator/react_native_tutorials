import {
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
	disable?: boolean;
	style?: ViewStyle;
	textStyle?: TextStyle;
	bgColor: string;
}

export const Button = ({
	title,
	onPress,
	disable = false,
	style,
	textStyle,
	bgColor,
}: ButtonProps) => {
	const isDisabled = disable;

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
			<Text style={textStyle}>{title}</Text>
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
});
