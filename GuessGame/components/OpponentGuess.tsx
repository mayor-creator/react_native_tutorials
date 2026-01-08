import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button } from "./Button";

type humanPlayerGuess = {
  humanPlayerNumber: number;
};
type MatchGuess = {
  id: string;
  count: number;
  guess: number;
};

export const OpponentGuessNumber = ({
  humanPlayerNumber,
}: humanPlayerGuess) => {
  const [count, setCount] = useState<number>(1);
  const [opponentGuess, setOpponentsGuess] = useState(() =>
    Math.floor(Math.random() * 99 + 1)
  );
  const [match, setMatch] = useState<MatchGuess[]>([
    { id: Math.random().toString(), count: 1, guess: opponentGuess },
  ]);

  const handleLower = () => {
    const nextCount = count + 1;
    const nextGuess = Math.floor(Math.random() * 99 + 1);

    setCount(nextCount);
    setOpponentsGuess(nextGuess);

    setMatch((previousMatch) => [
      ...previousMatch,
      { id: Math.random().toString(), count: nextCount, guess: nextGuess },
    ]);
  };

  const handleHigher = () => {
    setOpponentsGuess(() => Math.floor(Math.random() * 99 + 1));
  };

  const renderGuessGameItem = ({ item }: { item: MatchGuess }) => {
    return (
      <View style={styles.opponentScoreContainer}>
        <Text style={styles.countText}>{item.count}</Text>
        <Text style={styles.countText}>Opponent's Guess: {item.guess}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.opponentContainer}>
        <Text style={styles.title}>Opponent's Guess</Text>
      </View>

      <View style={[styles.opponentContainer, styles.guessNumberContainer]}>
        <Text style={styles.opponentText}>{opponentGuess}</Text>
      </View>

      <View style={styles.pickContainer}>
        <Text style={styles.title}>Higher or Lower?</Text>
        <View style={styles.opponentButtonContainer}>
          <Button label="-" onPress={handleLower} />
          <Button label="+" onPress={handleHigher}></Button>
        </View>
      </View>

      <FlatList
        data={match}
        keyExtractor={(item) => item.id}
        renderItem={renderGuessGameItem}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D3C59",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  opponentContainer: {
    marginTop: 50,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    padding: 20,
  },
  guessNumberContainer: {
    marginTop: 30,
    width: "80%",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#94A378",
  },
  pickContainer: {
    marginTop: 30,
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
    backgroundColor: "#94A378",
    borderRadius: 10,
    padding: 20,
  },
  opponentButtonContainer: {
    paddingTop: 10,
    flexDirection: "row",
  },
  opponentScoreContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#2D3C59",
    borderRadius: 20,
    backgroundColor: "#D1855C",
    gap: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "Outfit_600SemiBold",
    fontSize: 18,
  },
  opponentText: {
    color: "#FFFFFF",
    fontFamily: "Outfit_500Medium",
    fontSize: 28,
  },
  countText: {
    color: "#FFFFFF",
  },
});
