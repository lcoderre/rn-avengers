import React from 'react';
import { StyleSheet, Text, View, Image, ListView, TouchableHighlight } from 'react-native';
import customData from './data'
import CharacterPreview from './CharacterPreview';


export default class CharacterList extends React.Component {

  static navigationOptions = {
    title: 'List of Characters',
  };


  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const { navigate } = props.navigation;

    this.state = {
      dataSource: ds.cloneWithRows(customData.data.results),
      navigateToCharacter: function(rowData) {

        navigate('CharacterDetails', {
        thumbnail: rowData.thumbnail,
        name: rowData.name,
        description: rowData.description
      })
      }
    }
  }


  renderRow = function(navigateTo) {
    return function(rowData) {
      return (
        <CharacterPreview 
          thumbnail={rowData.thumbnail} 
          characterName={rowData.name}
          onPress={() => navigateTo(rowData) }
          />
      )
    }
  }


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
 

    return (
      <ListView style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow(this.state.navigateToCharacter)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});
