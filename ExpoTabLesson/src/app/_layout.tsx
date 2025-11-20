import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";

export default function RootLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "teal" }}>
			<Tabs.Screen
				name="(home)/index"
				options={{
					title: "Home",
					tabBarLabel: "Index",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="numeric-1-box-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="second"
				options={{
					title: "Second",
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="numeric-2-box-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="third"
				options={{
					title: "Third",
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons
							name="numeric-3-box-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="fourth"
				options={{
					title: "Fourth",
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons
							name="numeric-4-box-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
