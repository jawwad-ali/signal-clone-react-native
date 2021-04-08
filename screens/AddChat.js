import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
import { db } from '../firebase'

const AddChat = ({ navigation }) => {

    const [input, setInput] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new Chat",
            headerBackTitle: "Chats"
        })
    }, [])

    const createNewChat = async () => {
        // creating and stroing chats in "chats" collection
        await db.collection("chats")
            .add({
                chatName: input
            })
            .then(() => {
                navigation.goBack()
            })
            .catch((error) => alert(error))
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter a chat name"
                value={input}
                onChangeText={(text) => setInput(text)}
                leftIcon={
                    <Icon name="wechat" type="antdesign" size={24} color="black" />
                }
            />
            <Button onPress={createNewChat} title="Create new Chat" />
        </View>
    )
}

export default AddChat

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30,
        height: '100%'
    }
})
