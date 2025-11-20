import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
	return (
		<>
			<StatusBar style="auto" />
			<Stack>
				<Stack.Screen
					name="proverbs/[id]"
					options={{ title: "Proverbs", animation: "slide_from_bottom" }}
				/>
			</Stack>
		</>
	);
}
