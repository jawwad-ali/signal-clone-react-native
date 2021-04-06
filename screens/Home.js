import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomListScreen from '../Components/CustomListScreen'
import { auth } from "../firebase"

const Home = ({ navigation }) => {

    const backuser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
        // alert("hello wordl")
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: '#ffff' },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 13 }}>
                    <TouchableOpacity onPress={backuser}>
                        <Avatar rounded
                            source={{ uri: auth?.currentUser?.photoURL }}
                        />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListScreen />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
