import { React } from 'react';
import { Text, ImageBackground } from 'react-native';

import imgCapa from '../../assets/capa.jpg';
import Estilo from './Estilo';

export default function TelaInicio() {
  return (
    <ImageBackground
    blurRadius={7}
    style={ Estilo.container }
    source={ imgCapa }
    >
      <Text style={Estilo.titulo}>Adega</Text>
      <Text style={Estilo.subtitulo}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
    </ImageBackground>
  );
}
