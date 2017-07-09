import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import CharacterPreview from './CharacterPreview';


export default class CharacterDetails extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() { 
    let {name, description, thumbnail} = this.props.navigation.state.params 

    return (
      <View style={styles.container}>
        <CharacterPreview thumbnail={thumbnail} characterName={name} />

        <View style={styles.detailsContainer}>
          <Text style={styles.detailType}>Description <Text style={styles.detailValue}> {description}</Text></Text>  
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  detailsContainer: {
    padding:10
  },

  detailType: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,

  },
  detailValue: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 16,
  }
});
