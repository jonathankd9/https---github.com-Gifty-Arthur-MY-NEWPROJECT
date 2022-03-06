import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

class Food extends Component{
    render(){
        return(
            <View style={{flex: 1,backgroundcolor:'black'}}>
            <View style={{...StyleSheet.absoluteFill}}>
                <Image source={require('../assets/gifty.JPG')}
                    style={{flex:1,height:null,width:null}}
                    />

            </View>
                
            </View>
            
        );
    }
}
export default Food;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignment:'center',
        justifyContent: 'center'
    }
});



