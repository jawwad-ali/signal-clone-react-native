import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from "react-native-elements"
import { auth } from '../firebase'

const CustomListScreen = ({ navigation }) => {


    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>YouTube Chat</ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipseSizeMode="tail">This is test subtitle</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListScreen

const styles = StyleSheet.create({})
