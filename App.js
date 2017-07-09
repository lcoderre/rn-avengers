import React from 'react'; 
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import CharacterDetails from './CharacterDetails';
import CharacterList from './CharacterList';

import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  CharacterList: { screen: CharacterList },
  CharacterDetails: { screen: CharacterDetails },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
