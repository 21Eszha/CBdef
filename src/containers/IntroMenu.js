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
  FlatList,
} from 'react-native';
import Card from '../components/CardPart';
import logoImg from '../assets/Ikon.png';

const { width, height } = Dimensions.get('window');

export default class IntroMenu extends Component<{}> {
  static navigationOptions = {
    headerTitle: <Text>Perkenalan</Text>,
  };
  constructor(props) {
    super(props);

    this.state = {
      gg: true,
      FlastListItem: [
        {
          key: 1,
          gambar: 'https://i.imgur.com/r0bujEn.png',
          nama: 'Siapa Nama Anda ?',
          harga: 20000,
        },
        {
          key: 2,
          gambar: 'https://i.imgur.com/PrvMfvp.png',
          nama: 'Anda Tinggal Dimana ?',
          harga: 12000,
        },
        {
          key: 3,
          gambar: 'https://i.imgur.com/6sGdFap.png',
          nama: 'Senang Berkenalan',
          harga: 65000,
        },
      ],
    };
  }

  setActive() {
    this.setState({ gg: !this.state.gg });
    console.log(this.state.gg);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iklan}>
          <FlatList
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
            data={this.state.FlastListItem}
            renderItem={({ item }) => (
              <Card 
              navigation={this.props.navigation} 
              active={this.state.gg}
              setActive={() => this.setActive()}
              {...item} />
            )}
            // horizontal
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight
  },
  content: {
    paddingTop: 30,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  iklan: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 20,
    // marginBottom: 20,
  },
});
