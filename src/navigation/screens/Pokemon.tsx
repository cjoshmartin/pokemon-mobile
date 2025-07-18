import { Text } from '@react-navigation/elements';
import { StaticScreenProps } from '@react-navigation/native';
import { Image, StyleSheet, View } from 'react-native';
import pokemon from '../../../data';

type Props = StaticScreenProps<{
  id: string;
}>;

export function Pokemon({ route }: Props) {
  const a_pokemon = pokemon.find((pokemon) => parseInt(pokemon.id) === parseInt(route.params.id));

  if (!a_pokemon) {
    return <Text>Pokemon not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pokemonName}>{a_pokemon.name}</Text>
      <Image source={{ uri: a_pokemon.image }} style={styles.pokemonImage} />

      <View style={styles.pokemonStats}>
      <Text style={styles.pokemonStatsText}>Stats</Text>
        <Text style={styles.pokemonStatsText}>HP: {a_pokemon.stats.hp}</Text>
        <Text style={styles.pokemonStatsText}>Attack: {a_pokemon.stats.attack}</Text>
        <Text style={styles.pokemonStatsText}>Defense: {a_pokemon.stats.defense}</Text>
        <Text style={styles.pokemonStatsText}>Special Attack: {a_pokemon.stats["special-attack"]}</Text>
        <Text style={styles.pokemonStatsText}>Special Defense: {a_pokemon.stats["special-defense"]}</Text>
        <Text style={styles.pokemonStatsText}>Speed: {a_pokemon.stats.speed}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  pokemonImage: {
    width: 100,
    height: 100,
  },
  pokemonName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pokemonStats: {
    flexDirection: 'column',
    fontWeight: '400',
    gap: 10,
  },
  pokemonStatsText: {
    fontSize: 20,
  },
});
