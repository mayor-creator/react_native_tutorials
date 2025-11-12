import { Divider } from "@rneui/themed";
import {
	FlatList,
	type ListRenderItem,
	StyleSheet,
	Text,
	View,
} from "react-native";
import coffeeData from "../data/coffeeData.json";

type Coffee = {
	title: string;
	description: string;
	ingredients: string[];
	id: number;
};

const typedCoffeeData = coffeeData as Coffee[];

const renderCoffeeItem: ListRenderItem<Coffee> = ({ item }) => (
	<View style={styles.card}>
		<Text style={styles.title}>{item.title}</Text>
		<Text style={styles.description}>{item.description}</Text>
	</View>
);

const Separator = () => {
	return <Divider width={2} color="green" />;
};

export const CoffeeShop = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Coffee Menu</Text>
			<Divider orientation="vertical" width={6} />
			{typedCoffeeData.length > 0 ? (
				<FlatList
					data={typedCoffeeData}
					keyExtractor={(item) => item.id.toString()}
					renderItem={renderCoffeeItem}
					ItemSeparatorComponent={Separator}
					style={styles.list}
					contentContainerStyle={styles.listContent}
				/>
			) : (
				<Text>No coffee items found</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		marginTop: 20,
	},

	header: {
		color: "#4b2e05",
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},

	list: {
		width: "90%",
		maxHeight: 300,
		backgroundColor: "#fff",
		borderRadius: 12,
		elevation: 3,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
	},

	listContent: {
		padding: 10,
	},

	card: {
		backgroundColor: "#f9f6f1",
		borderRadius: 10,
		padding: 12,
		marginVertical: 6,
	},

	title: {
		color: "#3b2f2f",
		fontSize: 18,
		fontWeight: "600",
		marginBottom: 4,
	},

	description: {
		color: "#5a5a5a",
		fontSize: 14,
		marginBottom: 4,
	},
});
