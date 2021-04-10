import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from "react-native-elements"
import { auth } from '../firebase'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => { 
            if (authUser) {
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])

    const signIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png" }}
                style={{ height: 150, width: 150, marginBottom: 10 }}
            />
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Email"
                    type="email"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={signIn}
                />

            </View>
            <Button containerStyle={styles.button} title="Login" onPress={signIn} />

            <Button
                onPress={() => navigation.navigate("Register")}
                containerStyle={styles.button}
                type="outline"
                title="Register" />

            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        marginTop: 10,
        width: 250
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
