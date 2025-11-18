import Feather from "@expo/vector-icons/Feather";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Advice } from "./components/advice";
import { Counter } from "./components/counter";
import { NameList } from "./components/nameList";
import { CoffeeScreen } from "./screens/CoffeeScreen";

// Tab Bottom
const Tab = createBottomTabNavigator();

const TabGroup = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route, navigation }) => ({
				tabBarIcon: ({ color, focused, size }) => {
					let iconName;
					if (route.name === "Coffee") {
						iconName = focused ? "coffee" : "home";
					}
					return <Feather name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: "purple",
			})}
		>
			<Tab.Screen name="Coffee" component={CoffeeScreen} />
			<Tab.Screen name="Advice" component={Advice} />
			<Tab.Screen name="Counter" component={Counter} />
			<Tab.Screen name="Name" component={NameList} />
		</Tab.Navigator>
	);
};

export const Navigation = () => {
	return (
		<NavigationContainer>
			<TabGroup />
		</NavigationContainer>
	);
};
