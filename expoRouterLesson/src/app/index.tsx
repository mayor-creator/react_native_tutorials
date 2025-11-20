import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
	return (
		<View>
			<Text>Hello Expo Router</Text>
			<Link href="../second" push asChild>
				<Button title="push to /second"></Button>
			</Link>
			<Link
				href={{ pathname: "../second", params: { name: "Kadi" } }}
				push
				asChild
			>
				<Button title="Great Kadi on /second"></Button>
			</Link>
			<Link href="../proverbs/1" push asChild>
				<Button title="push to proverb/1"></Button>
			</Link>
			<Link
				href={{ pathname: "../proverbs/[id]", params: { id: 2 } }}
				push
				asChild
			>
				<Button title="push to /proverbs/2"></Button>
			</Link>
		</View>
	);
}
