import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const proverbData = [
	{
		id: 1,
		proverb: "A stitch in time saves nine.",
		source: "English Proverb",
	},
	{
		id: 2,
		proverb:
			"The best time to plant a tree was 20 years ago. The second best time is now.",
		source: "Chinese Proverb",
	},
	{
		id: 3,
		proverb: "Wisdom begins in wonder.",
		source: "Greek Proverb",
	},
	{
		id: 4,
		proverb: "Fall seven times, stand up eight.",
		source: "Japanese Proverb",
	},
	{
		id: 5,
		proverb: "Patience is the key to paradise.",
		source: "Turkish Proverb",
	},
	{
		id: 6,
		proverb: "A smooth sea never made a skilled sailor.",
		source: "African Proverb",
	},
	{
		id: 7,
		proverb: "He who fears being conquered is sure of defeat.",
		source: "Napoleonic Saying",
	},
	{
		id: 8,
		proverb: "Where there is no vision, the people perish.",
		source: "Biblical Proverb",
	},
	{
		id: 9,
		proverb:
			"One who asks a question is a fool for a minute; one who does not is a fool for life.",
		source: "Chinese Proverb",
	},
	{
		id: 10,
		proverb:
			"If you want to go fast, go alone. If you want to go far, go together.",
		source: "African Proverb",
	},
];

export default function ProverbScreen() {
	const params = useLocalSearchParams<{ id: string }>();

	const proverb = proverbData.find((p) => String(p.id) === params.id);

	if (!proverb) {
		return (
			<View>
				<Text style={{ fontSize: 18, fontWeight: "bold" }}>Not found</Text>
			</View>
		);
	}

	return (
		<View>
			<Text>{proverb.proverb}</Text>
			<Text>-{proverb.source}</Text>
		</View>
	);
}
