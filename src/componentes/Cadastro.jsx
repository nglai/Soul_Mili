import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';

export default function Cadastro({navigation}){
    const [nome,setNome] = useState(null);
    const [email,setEmail] = useState(null);
    const [telefone,setTelefone] = useState(null);
    const [cpf,setCpf] = useState(null);
    const [password, setPassword] = useState(null);

    const [isSelected, setSelection] = useState(false);

    const enviarDados = () => {
        navigation.navigate('Principal')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.cadastro}>CADASTRE-SE</Text>

            <View style={styles.viewText}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome'
                    autoCorrect={false}
                    keyboardType='default'
                    onChangeText={(value) => setNome(value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCorrect={false}
                    keyboardType='email-address'
                    onChangeText={(value) => setEmail(value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Telefone'
                    autoCorrect={false}
                    keyboardType='numeric'
                    onChangeText={(value) => setTelefone(value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder='CPF'
                    autoCorrect={false}
                    keyboardType='numeric'
                    onChangeText={(value) => setCpf(value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    autoCorrect={false}
                    keyboardType='numeric'
                    onChangeText={(value) => setPassword(value)}
                />
                <View style={styles.checkContainer}>
                <View style={styles.checkAlign}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
                    <Text style={styles.label}> Eu aceito os termos de uso</Text>
                </View>
                </View>

                <TouchableOpacity
                    style={styles.btnCadastro}
                    onPress={() => enviarDados()}
                    >
                    <Text style={styles.textCadastro}>Enviar Dados</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#242424',
        alignItems:'center',
        justifyContent:'center',

    },
    cadastro:{
        color:'white',
        fontSize:25,
        marginTop:'15%',
    },
    viewText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        paddingBottom:15,
    },
    input:{
        backgroundColor:'white',
        width:'90%',
        marginBottom:15,
        color:'#222',
        borderRadius:10,
        fontSize:17,
        padding:10,
    },
    btnCadastro:{
        backgroundColor: '#8C52FF',
        width:'50%',
        height:'10%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    textCadastro:{
        color:'white',
        fontSize:20,
    },
    checkContainer:{
        alignItems: "center",
        justifyContent: "center",
    },
    checkAlign:{
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label:{
        color:'white',
        margin: 8,
    }
});