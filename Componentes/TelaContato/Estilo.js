import { StyleSheet } from "react-native-web";

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',        
        alignItems: 'center',
        backgroundColor: '#D1B7FF',
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 80,
        marginTop: 20,
        padding: 20,
        width: 250
    },
    titulo: {
        color: '#000',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitulo: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
    },
    TelaDeFundo:{
        backgroundColor: '#fff'
    }

});

export default Estilo;