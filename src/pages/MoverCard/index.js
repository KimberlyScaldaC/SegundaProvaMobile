import { StyleSheet, View, Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import CardMovie from '../../components/CardMovie';


export default function MoverCard(){
   
    let [filmes, setFilmes] = useState([]);

    const baseURL = "https://api.otaviolube.com/api/filmes?populate=*";

    useEffect(function(){
        fetch(baseURL).then(data => data.json()).then(objeto => {
          console.log(objeto);
          setFilmes(objeto.data);
        })
      }, []);
   
    return(
        <SafeAreaView style={styles.container}>
                { filmes.length > 0 ?  <ScrollView horizontal>
                    {
                    filmes.map(filme => 
                    <CardMovie key={filme.id} filme={filme.attributes}/>)
                    }
                </ScrollView> : <ActivityIndicator size={'large'} color={'pink'}/>}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });
  