import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from "react-native-elements"

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = () => {

    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={{
                    uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal.log.png",
                }}
                style={{ height: 150, width: 150 }}
            />
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Email"
                    autoFocus type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

            </View>
            <Button containerStyle={styles.button} title="Login" />

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
