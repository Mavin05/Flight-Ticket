import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const NewPassword = ({navigation}) => {
  return (
    <SafeAreaProvider style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text style={styles.bak}>Back</Text>
            </TouchableOpacity>
        </View>
        <View>
        <TextInput style={styles.old} placeholder='Old Password'></TextInput>
        <TextInput style={styles.npass} placeholder='New Password'></TextInput>
        </View>
    </SafeAreaProvider>
  )
}

export default NewPassword

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex:.07,
        backgroundColor:'#e52881',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    },
    bak:{
        fontWeight:'bold',
        fontSize:22,
        padding:12,
        color:'#ffff',
    }
})