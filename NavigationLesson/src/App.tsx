import { Button } from "@react-navigation/elements";
import {
	createStaticNavigation,
	useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

function HomeScreen() {
	const navigation = useNavigation();

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text>Home Screen </Text>
			<Button
				onPress={() => {
					navigation.navigate("Details", {
						itemId: 86,
						otherParam: "anything you want here",
					});
				}}
			>
				Go to Details
			</Button>
		</View>
	);
}

function DetailsScreen({ route }) {
	const navigation = useNavigation();

	const { itemId, otherParam } = route.params;

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text>Details Screen </Text>
			<Text>ItemId: {JSON.stringify(itemId)}</Text>
			<Text>otherParam: {JSON.stringify(otherParam)}</Text>
			<Button
				onPress={() =>
					navigation.push("Details", {
						itemId: Math.floor(Math.random() * 100),
					})
				}
			>
				Go to Details... again
			</Button>
			<Button onPress={() => navigation.goBack()}>Go back</Button>
			<Button onPress={() => navigation.popTo("Home")}>Go to Home</Button>
			<Button onPress={() => navigation.popToTop()}>
				Go back to first screen in stack
			</Button>
		</View>
	);
}

const RootStack = createNativeStackNavigator({
	initialRouteName: "Home",
	screenOptions: {
		headerStyle: {
			backgroundColor: "#f4511e",
		},
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontWeight: "bold",
		},
	},
	screens: {
		Home: {
			screen: HomeScreen,
		},
		Details: DetailsScreen,
	},
});

const Navigation = createStaticNavigation(RootStack);

export function App() {
	return <Navigation />;
}
