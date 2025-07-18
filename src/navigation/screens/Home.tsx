import { Button, Text } from '@react-navigation/elements';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

import pokemon from '../../../data';

export function Home() {

  const pokemonList = pokemon.map((pokemon) => {
    return (
      <Button 
        key={pokemon.id} 
        screen="Pokemon" 
        params={{ id: pokemon.id }}
        style={styles.pokemonButton}
      >
        <Image source={{ uri: pokemon.image }} style={styles.pokemonImage}  />
        <View style={styles.pokemonName}>
          <Text style={styles.pokemonNameText}>{pokemon.name}</Text>
          <Text style={styles.clickToView}>click to view</Text>
        </View>
      </Button>
    )
  })

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pokemonList}>
        {pokemonList}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  pokemonList: {
    flexDirection: 'column',
    gap: 10,
  },
  pokemonButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '',
  },
  pokemonImage: {
    width: 100,
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  pokemonName: {
    fontSize: 20,
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    padding: 10,
  },
  pokemonNameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  clickToView: {
    fontSize: 12,
  },
});
