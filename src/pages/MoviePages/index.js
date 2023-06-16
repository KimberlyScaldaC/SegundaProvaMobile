import { StyleSheet, View, Text, SafeAreaView} from 'react-native';

import LoginPage from '../LoginPage';





export default function MoviePages(){

   
    return(
        <SafeAreaView style={styles.container}>
            <LoginPage/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0f12',
      justifyContent: 'center',
    },
  });
  