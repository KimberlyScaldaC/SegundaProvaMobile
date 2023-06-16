import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.7;

const baseUrl = "https://api.otaviolube.com";


export default function CardMovie({ filme }){
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: baseUrl + filme.poster.data.attributes.formats.small.url}}/>
            <Text style={styles.title}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse.length > 200 ? filme.sinopse.substring(0, 200) + "..." : filme.sinopse }</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#10385c',
        margin: 15,
        padding: 10,
        marginTop: 50,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH,
    },
    image: {
        height: '200px',
        width: '150px',
        resizeMode: 'cover',
        marginBottom: 10,
    },
    title : {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    sinopse: {
        color: 'white',
        marginBottom: 10,
        textAlign: 'justify',
    },
    button: {
        height: 35,
        backgroundColor: '#4f1620',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    btnText: {
        color: 'white',
        fontsize: 25,
        fontWeight: 'bold',
    },
})