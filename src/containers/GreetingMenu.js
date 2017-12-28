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

export default class GreetingMenu extends Component<{}> {
  static navigationOptions = {
    headerTitle: <Text>Salam / Ucapan</Text>,
  };
  constructor(props) {
    super(props);

    this.state = {
      gg: true,
      FlastListItem: [
        {
          key: 0,
          gambar: 'https://i.imgur.com/WtsFKvL.png',
          nama: 'Assalamualaikum',
          harga: 20000,
        },
        {
          key: 1,
          gambar: 'https://i.imgur.com/s7DjWpO.png',
          nama: 'Selamat Pagi',
          harga: 20000,
        },
        {
          key: 2,
          gambar: 'https://i.imgur.com/9B2qnn2.png',
          nama: 'Selamat Siang',
          harga: 12000,
        },
        {
          key: 3,
          gambar: 'https://i.imgur.com/xYiQNJE.png',
          nama: 'Selamat Sore',
          harga: 65000,
        },
        {
          key: 4,
          gambar: 'https://i.imgur.com/14FSySP.png',
          nama: 'Selamat Malam',
          harga: 65000,
        },
        {
          key: 5,
          gambar: 'https://i.imgur.com/YWpwT6X.png',
          nama: 'Apa Kabar ?',
          harga: 65000,
        },
        {
          key: 6,
          gambar: 'https://i.imgur.com/uPw69ly.png',
          nama: 'Sampai Jumpa',
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
                {...item}
              />
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
