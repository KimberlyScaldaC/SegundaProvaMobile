import { Link } from "@react-navigation/native";
import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity} from "react-native";
import styles from "./styles";


export default function LoginPage(){

    const [usuario, setUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');

    return(
        <View style={styles.primeiraView}>
            <View style={styles.informacaoView}>
                
                <Text style={styles.texto}>Email:</Text>
                <TextInput 
                style={styles.caixaTexto}
                placeholder = "fulano@gmail.com" 
                onChangeText = {newUsuario => setUsuario(newUsuario)}
                defaultValue = {usuario}/>

                <Text style={styles.texto}>Senha:</Text>
                <TextInput
                secureTextEntry={true}
                style={styles.caixaTexto}
                placeholder = "Password" 
                onChangeText = {newSenha => setSenhaUsuario(newSenha)}
                defaultValue = {senhaUsuario}
                />

                <TouchableOpacity style={styles.botton}>
                    <Link style={styles.bottonText} to={{screen: "MoverCard"}}>Login</Link>
                </TouchableOpacity>

                <Link style={styles.link} to={{screen: "CadastroPage"}}>Cadastrar</Link>
                <Link style={styles.link} to={{screen: "RecuperacaoPage"}}>Recuperaçao de Senha</Link>
                

            </View>

            
        </View>
    )
}


// style={styles.}
//