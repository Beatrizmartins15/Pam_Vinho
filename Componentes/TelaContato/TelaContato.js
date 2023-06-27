import React from 'react';
import {Foundation, FontAwesome , Zocial, Entypo}from '@expo/vector-icons';
import {Text, View, StatusBar} from "react-native";
import Estilo from '../TelaContato/Estilo';

export default function TelaContato() {
  return (
  <View style={Estilo.TelaDeFundo}>
    <View style={Estilo.container}>
      <Foundation name="telephone" size={24} color="black" />
      <Text style={Estilo.titulo}>Telefone</Text>
      <Text style={Estilo.subtitulo}>+55 21 000000000</Text>
      <StatusBar style="auto" />
    </View>

    <View style={Estilo.container}>
      <FontAwesome name="home" size={24} color="black" />
      <Text style={Estilo.titulo}>Endereço</Text>
      <Text style={Estilo.subtitulo}>Av. 123, 222 - Rio de Janeiro RJ</Text>
      <StatusBar style="auto" />
    </View>

    <View style={Estilo.container}>
      <Zocial name="email" size={24} color="black" />
      <Text style={Estilo.titulo}>E-mail</Text>
      <Text style={Estilo.subtitulo}>preferida@adega.com.br</Text>
      <StatusBar style="auto" />
    </View>

    <View style={Estilo.container}>
      <Entypo name="instagram" size={24} color="black" />
      <Text style={Estilo.titulo}>Instagram</Text>
      <Text style={Estilo.subtitulo}>@adegapreferida</Text>
      <StatusBar style="auto" />
    </View>
  </View>
  );
}