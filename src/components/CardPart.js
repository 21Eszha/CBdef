import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('id-ID');
//var Speech = require('react-native-speech');

const { width, height } = Dimensions.get('window');
const CardPart = ({
  gambar,
  nama,
  harga,
  navigation,
  kelompok,
  setActive,
  active,
}) => (
  <TouchableOpacity
    style={{ flexWrap: 'wrap' }}
    onPress={() => {
      if (active) {
        //Tts.addEventListener('tts-start', event => {
          //console.log('start', event);
          //setActive();
        //});
        Tts.stop();
        Tts.speak(nama);
        //Tts.addEventListener('tts-finish', event => {
          //console.log('finish', event);
          //setActive();
        //});
      }
    }}
    /*
    disabled={() => {
      Tts.stop();
    }}
    */
  >
    <View
      style={{
        backgroundColor: 'white',
        width: width / 2 - 20,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingVertical: 10,
        flexWrap: 'wrap',
      }}
    >
      <Image
        style={{ height: 130, resizeMode: 'stretch' }}
        source={{ uri: gambar }}
      />
    </View>
  </TouchableOpacity>
);

export default CardPart;
