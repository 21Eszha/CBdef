/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import logoImg from '../assets/Ikon.png';

const { width, height } = Dimensions.get('window');

export default class Home extends Component<{}> {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={logoImg} style={styles.image} />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('GreetingMenu');
            }}
          >
            <View style={styles.button}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Sapaan / Salam
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('IntroMenu');
            }}
            // background={TouchableNativeFeedback.Ripple('white', false)}
          >
            <View style={styles.button}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Perkenalan
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HelpMenu');
            }}
            // background={TouchableNativeFeedback.Ripple('white', false)}
          >
            <View style={styles.button}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Minta Tolong
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {this.props.navigation.navigate('Menulis');}}
          >
            <View style={styles.button}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Menulis
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    //marginTop: 80,
    width: 150,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    width: width - 75,
    height: 60,
    backgroundColor: '#47525E',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 5,
  },
});
