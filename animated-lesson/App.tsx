import { Button, StyleSheet, Text, View } from "react-native";
import Animated, {
	useAnimatedProps,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from "react-native-reanimated";
import { Circle, Svg } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function App() {
	const width = useSharedValue(100);
	const height = useSharedValue(100);

	const handlePress = () => {
		width.value = withSpring(width.value + 50);
		height.value = withSpring(height.value + 50);
	};

	const handleResetPress = () => {
		width.value = withSpring(100);
		height.value = withSpring(100);
	};

	const translateX = useSharedValue(0);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: withSpring(translateX.value) }],
	}));

	const handleMoveRight = () => {
		translateX.value = withSpring(translateX.value + 50);
	};

	const r = useSharedValue(20);

	const handlePressCircle = () => {
		r.value += 10;
	};

	const animatedProps = useAnimatedProps(() => ({
		r: withTiming(r.value),
	}));

	return (
		<View style={styles.container}>
			<View style={styles.section}>
				<Animated.View style={[styles.animatedBox, { width, height }]} />
				<Button title="Press me" onPress={handlePress}></Button>
				<Button title="Reset me" onPress={handleResetPress}></Button>
			</View>

			<View style={styles.section}>
				<Animated.View style={[styles.animatedContainer, animatedStyle]}>
					<Text style={{ textAlign: "center", color: "white" }}>Hello</Text>
				</Animated.View>
				<Button title="Move me" onPress={handleMoveRight}></Button>
			</View>

			<Svg style={styles.svg}>
				<AnimatedCircle
					cx="50%"
					cy="50%"
					fill="#b58df1"
					animatedProps={animatedProps}
				/>
			</Svg>
			<Button title="Press Me" onPress={handlePressCircle}></Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		backgroundColor: "#F2AEBB",
	},
	section: {
		marginBottom: 20,
		alignItems: "center",
	},
	animatedBox: {
		borderRadius: 10,
		backgroundColor: "#6DC3BB",
		marginBottom: 10,
	},
	animatedContainer: {
		height: 120,
		width: 120,
		borderRadius: 20,
		backgroundColor: "#5459AC",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
	},
	svg: {
		height: 250,
		width: "50%",
	},
});
