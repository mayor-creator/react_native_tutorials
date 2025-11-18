import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Navigation } from "./navigation";

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<Navigation />
		</>
	);
}
