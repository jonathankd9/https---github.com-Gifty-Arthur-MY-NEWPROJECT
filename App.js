import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import {Food} from './app/index';
import {AppLoading} from 'expo-app-loading';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}




export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      isReady:false
    }
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      
      require('./assets/plantain.jpeg'),
    ]);

    

    await Promise.all([...imageAssets]);
  }
  render(){
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
 
    return<View Food></View>
    
  }
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
