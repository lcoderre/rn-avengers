import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';


export default class CharacterPreview extends React.Component {


  render() {
    let imgSrc = this.props.thumbnail.path + "." + this.props.thumbnail.extension
    let charName = this.props.characterName

    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor="white">
      <View style={styles.container}>
        <Image style={{height: 180}} source={{uri: imgSrc}}>
          <View style={styles.backdropView}>
            <Text style={styles.characterName}>{charName}</Text>
          </View>
        </Image>
      </View>
      </TouchableHighlight>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  backdropView: {
    height: 180,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  characterName: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    textShadowOffset: {width: 0, height: 1},
    textShadowColor: 'black',
    textShadowRadius: 3
  }
});