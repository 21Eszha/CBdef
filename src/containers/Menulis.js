import Autocomplete from 'react-native-autocomplete-input';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('id-ID');
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
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../components/CardPart';
import logoImg from '../assets/Ikon.png';
//import AutoComplete from 'react-native-autocomplete-select';

const API = 'https://swapi.co/api';
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

const { width, height } = Dimensions.get('window');
const pre = [
  ['makan', 'eatable'],
  ['minum', 'eatable'],
  ['pakai', 'wearable'],
  ['menggunakan', 'wearable'],
  ['marah', 'sifat'],
];
const obj = [
  ['jeruk', 'eatable'],
  ['apel', 'eatable'],
  ['nasi', 'eatable'],
  ['baju', 'wearable'],
];
const ket = ['di pagi hari', 'di rumah'];
const subj = ['saya', 'kamu', 'dia'];

export default class Menulis extends Component {
  static navigationOptions = {
    headerTitle: <Text>Halaman Input</Text>,
  };

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      suggestion: [],
      soundText: '',
    };
  }

  searchSPOK(cari) {
    cari = cari.toLowerCase();
    let splitted = cari.split(' ');
    console.log(splitted);

    let subject = '';
    let predikat;
    let objek;
    let keterangan;
    splitted.forEach(s => {
      filteredObj = obj.find(e => {
        return e[0] === s;
      });

      if (filteredObj) objek = filteredObj;

      filteredPre = pre.find(e => {
        return e[0] === s;
      });

      if (filteredPre) predikat = filteredPre;
    });

    //console.log(subject, predikat, objek, keterangan);

    let spo = [];
    if (objek !== undefined) {
      if (predikat === undefined) {
        if (splitted.indexOf(objek[0]) > 0) subject = splitted[0] + ' ';
        predikatSuggested = pre.filter(e => e[1] === objek[1]);
        spo = predikatSuggested.map(e => `${subject}${e[0]} ${objek[0]}`);
      } else {
        if (splitted.indexOf(objek[0]) > 1) subject = splitted[0] + ' ';
        spo = [`${subject}${predikat[0]} ${objek[0]}`];
      }
    } else {
      if (predikat !== undefined) {
        subject = splitted[0] + ' ';
        spo = [`${subject}${predikat[0]}`];
      }
    }

    let spok = [];
    spo.forEach(e => {
      spok.push(e);
      ket.forEach(k => {
        if (predikat !== undefined && predikat[1] === 'sifat') return;
        spok.push(e + ' ' + k);
      });
    });

    if (spok.length === 0) {
      pre.forEach(e => spok.push(cari + ' ' + e[0]));
    }
    this.setState({ suggestion: spok });
  }

  render() {
    //const { query } = this.state;
    //const data = this._filterData(query)
    return (
      <View style={styles.container}>
        <Autocomplete
          data={this.state.suggestion}
          //defaultValue={query}
          onChangeText={text => {
            this.searchSPOK(text);
            this.setState({ query: text });
          }}
          renderItem={item => (
            <TouchableOpacity
              style={styles.suggestion}
              onPress={() => {
                this.setState({ soundText: item, query: item, suggestion: [] });
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.infoText}>{this.state.soundText}</Text>
          <TouchableOpacity
            onPress={() => {
              Tts.stop();
              Tts.speak(this.state.soundText);
            }}
          >
            <View style={styles.button}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Sapaan / Salam
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
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25,
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 25,
  },
  infoText: {
    textAlign: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
  openingText: {
    textAlign: 'center',
  },
  suggestion: {
    paddingVertical: 5,
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

//export default Menulis;
