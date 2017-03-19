
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Swiper from 'react-native-swiper';
import randomcolor from 'randomcolor';

class TitleText extends Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'black' }}>
        {this.props.label}
      </Text>
    )
  }
}

export default class ProCalc extends Component {

  viewStyle() {
    return {
      flex: 1,
      backgroundColor: randomcolor(),
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
  render() {
    return (
      <Swiper
        loop={false}
        showsPagination={false}
        index={1}>
        <View style={this.viewStyle()}>
          <TitleText label="Left" />
        </View>
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={1}>
          <View style={this.viewStyle()}>
            <TitleText label="Top" />
          </View>
          <View style={this.viewStyle()}>
            <TitleText label="Home" />
          </View>
          <View style={this.viewStyle()}>
            <TitleText label="Bottom" />
          </View>
        </Swiper>        
        <View style={this.viewStyle()}>
          <TitleText label="Right" />
        </View>
      </Swiper>        
    );
  }
}


AppRegistry.registerComponent('ProCalc', () => ProCalc);
