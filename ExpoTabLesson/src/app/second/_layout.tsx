import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: "Second" }} />
			<Stack.Screen name="nested" options={{ title: "Second Nested" }} />
			<Stack.Screen
				name="also-nested"
				options={{ title: "Second Also Nested" }}
			/>
		</Stack>
	);
}
