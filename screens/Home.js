import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomListScreen from '../Components/CustomListScreen'
import { auth } from "../firebase"
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"

const Home = ({ navigation }) => {

    const backuser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: '#ffff' },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",

            headerLeft: () => (
                <View style={{ marginLeft: 13 }}>
                    <TouchableOpacity onPress={backuser} activeOpacity={0.5}>

                        <Avatar rounded
                            source={{ uri: auth?.currentUser?.photoURL }}
                        />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20
                }}>

                    <TouchableOpacity activeOpacity={0.5} >
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AddChat')} activeOpacity={0.5}>
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])

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
